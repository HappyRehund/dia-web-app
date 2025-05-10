import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Footprints, Menu } from 'lucide-react'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { stackServerApp } from "@/stack"
import { getUserDetails } from "@/actions/user.action"
import { UserButton } from "@stackframe/stack"

const NAVBAR_ITEMS = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Ulcus Detect',
    href: '/ulcus-detect'
  },
  {
    name: 'Track',
    href: '/track'
  },
  {
    name: 'Health Monitoring',
    href: '/health-monitor'
  },
  {
    name: 'Dia Doctor',
    href: '/dia-doctor'
  }
]

async function Navbar() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  const userProfile = await getUserDetails(user?.id);
  const isSignedIn = user !== null;

  if(!isSignedIn) return null;
  return (
    <>
      <main className='border-primary-100 fixed inset-x-0 top-0 z-50 border-b-2 bg-white/60 backdrop-blur-md'>
        <div className='h-20 flex items-center justify-between gap-8 max-w-7xl mx-auto px-4'>
          <Link href="/" className="text-xl font-bold font-mono tracking-wider flex gap-2">
            <Footprints />
            Dia-app
          </Link>
          
          <DesktopNavigation isSignedIn={isSignedIn} />
          <MobileNavigation isSignedIn={isSignedIn} signOutUrl={app.signOut} signInUrl={app.signIn} />
        </div>
      </main>
      <div className="h-20" />
    </>
  )
}

const DesktopNavigation = ({ isSignedIn }: { isSignedIn: boolean }) => (
  <main className='hidden gap-8 md:flex items-center'>
    {NAVBAR_ITEMS.map((nav, i) => (
      <Link href={nav.href} key={i}>
        <Button variant="link" className='px-0 font-normal'>
          {nav.name}
        </Button>
      </Link>
    ))}

    {isSignedIn ? (
      <UserButton />
    ) : (
      <Link href={stackServerApp.urls.signIn}>
        <Button variant="ghost" className='px-8 hover:cursor-pointer'>
          Sign In
        </Button>
      </Link>
    )}
  </main>
)

const MobileNavigation = ({ 
  isSignedIn,
  signOutUrl,
  signInUrl
}: { 
  isSignedIn: boolean
  signOutUrl: string
  signInUrl: string
}) => (
  <main className='flex md:hidden'>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu className='text-primary' />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col items-start justify-between pt-[15vh] pb-[10vh] *:text-start'>
        <SheetHeader>
          <SheetTitle className='sr-only'>Menu</SheetTitle>
          <SheetDescription className='sr-only'>
            Navigation menu
          </SheetDescription>
        </SheetHeader>
        <main className='flex h-full w-full flex-col justify-between gap-8 text-lg font-semibold text-black'>
          <section className='flex flex-col gap-2'>
            {NAVBAR_ITEMS.map((nav, i) => (
              <Link key={i} href={nav.href}>
                <SheetClose className='hover:text-secondary'>{nav.name}</SheetClose>
              </Link>
            ))}
          </section>
          <section className='flex flex-col gap-2'>
            {isSignedIn ? (
              <SheetClose asChild>
                <Link
                  href={signOutUrl}
                  className={cn(
                    buttonVariants({ variant: 'destructive' }),
                    'bg-error-400 text-white'
                  )}
                >
                  Sign Out
                </Link>
              </SheetClose>
            ) : (
              <SheetClose asChild>
                <Link
                  href={signInUrl}
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'text-white bg-secondary'
                  )}
                >
                  Sign In
                </Link>
              </SheetClose>
            )}
          </section>
        </main>
      </SheetContent>
    </Sheet>
  </main>
)

export default Navbar