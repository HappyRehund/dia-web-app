"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { toast } from "sonner";
import { createDailyMonitoring } from "@/app/health-monitor/_actions/health";
import { DateToUTCDate } from "@/lib/helpers/health-monitoring";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";

interface CreateDailyMonitoringFormData {
  date: Date;
  glucoseLevel: number;
  bloodPressure: number;
  cholesterol: number;
  uricAcid: number;
}

interface Props {
  trigger: React.ReactNode;
}

export default function CreateDailyMonitoringDialog({ trigger }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState<CreateDailyMonitoringFormData>({
    date: new Date(),
    glucoseLevel: 0,
    bloodPressure: 0,
    cholesterol: 0,
    uricAcid: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseFloat(value) || 0,
    }));
  };

  const handleDataChange = (date: Date | undefined) => {
    if (date) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        date,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsPending(true);

    toast.loading("Saving health data...", {
      id: "create-monitoring",
    });

    try {
      await createDailyMonitoring({
        ...formData,
        date: DateToUTCDate(formData.date),
      });

      toast.success("Health data saved successfully", {
        id: "create-monitoring",
      });

      setFormData({
        date: new Date(),
        glucoseLevel: 0,
        bloodPressure: 0,
        cholesterol: 0,
        uricAcid: 0,
      });

      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to save health data", {
        id: "create-monitoring",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Record Daily Health Monitoring</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div className="text-sm font-medium">Date</div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !formData.date && "text-muted-foreground"
                  )}
                >
                  {formData.date ? (
                    format(formData.date, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={handleDataChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <p className="text-sm text-muted-foreground">
              Select monitoring date
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Glucose Level (mg/dL)</div>
            <Input
              name="glucoseLevel"
              type="number"
              value={formData.glucoseLevel || ""}
              onChange={handleInputChange}
              step="0.1"
            />
            <p className="text-sm text-muted-foreground">
              Enter your blood glucose level
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Blood Pressure (mmHg)</div>
            <Input
              name="bloodPressure"
              type="number"
              value={formData.bloodPressure || ""}
              onChange={handleInputChange}
              step="0.1"
            />
            <p className="text-sm text-muted-foreground">
              Enter your blood pressure
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Cholesterol (mg/dL)</div>
            <Input
              name="cholesterol"
              type="number"
              value={formData.cholesterol || ""}
              onChange={handleInputChange}
              step="0.1"
            />
            <p className="text-sm text-muted-foreground">
              Enter your cholesterol level
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Uric Acid (mg/dL)</div>
            <Input
              name="uricAcid"
              type="number"
              value={formData.uricAcid || ""}
              onChange={handleInputChange}
              step="0.1"
            />
            <p className="text-sm text-muted-foreground">
              Enter your uric acid level
            </p>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? <Loader2 className="animate-spin mr-2" /> : null}
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
