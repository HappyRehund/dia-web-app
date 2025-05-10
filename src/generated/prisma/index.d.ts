
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DailyMonitoring
 * 
 */
export type DailyMonitoring = $Result.DefaultSelection<Prisma.$DailyMonitoringPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DailyMonitorings
 * const dailyMonitorings = await prisma.dailyMonitoring.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DailyMonitorings
   * const dailyMonitorings = await prisma.dailyMonitoring.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dailyMonitoring`: Exposes CRUD operations for the **DailyMonitoring** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyMonitorings
    * const dailyMonitorings = await prisma.dailyMonitoring.findMany()
    * ```
    */
  get dailyMonitoring(): Prisma.DailyMonitoringDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DailyMonitoring: 'DailyMonitoring',
    UserProfile: 'UserProfile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dailyMonitoring" | "userProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DailyMonitoring: {
        payload: Prisma.$DailyMonitoringPayload<ExtArgs>
        fields: Prisma.DailyMonitoringFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyMonitoringFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyMonitoringFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload>
          }
          findFirst: {
            args: Prisma.DailyMonitoringFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyMonitoringFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload>
          }
          findMany: {
            args: Prisma.DailyMonitoringFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload>[]
          }
          create: {
            args: Prisma.DailyMonitoringCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload>
          }
          createMany: {
            args: Prisma.DailyMonitoringCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyMonitoringCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload>[]
          }
          delete: {
            args: Prisma.DailyMonitoringDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload>
          }
          update: {
            args: Prisma.DailyMonitoringUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload>
          }
          deleteMany: {
            args: Prisma.DailyMonitoringDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyMonitoringUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyMonitoringUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload>[]
          }
          upsert: {
            args: Prisma.DailyMonitoringUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonitoringPayload>
          }
          aggregate: {
            args: Prisma.DailyMonitoringAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyMonitoring>
          }
          groupBy: {
            args: Prisma.DailyMonitoringGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyMonitoringGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyMonitoringCountArgs<ExtArgs>
            result: $Utils.Optional<DailyMonitoringCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    dailyMonitoring?: DailyMonitoringOmit
    userProfile?: UserProfileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserProfileCountOutputType
   */

  export type UserProfileCountOutputType = {
    monitorings: number
  }

  export type UserProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitorings?: boolean | UserProfileCountOutputTypeCountMonitoringsArgs
  }

  // Custom InputTypes
  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileCountOutputType
     */
    select?: UserProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountMonitoringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMonitoringWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DailyMonitoring
   */

  export type AggregateDailyMonitoring = {
    _count: DailyMonitoringCountAggregateOutputType | null
    _avg: DailyMonitoringAvgAggregateOutputType | null
    _sum: DailyMonitoringSumAggregateOutputType | null
    _min: DailyMonitoringMinAggregateOutputType | null
    _max: DailyMonitoringMaxAggregateOutputType | null
  }

  export type DailyMonitoringAvgAggregateOutputType = {
    glucoseLevel: number | null
    bloodPressure: number | null
    cholesterol: number | null
    uricAcid: number | null
  }

  export type DailyMonitoringSumAggregateOutputType = {
    glucoseLevel: number | null
    bloodPressure: number | null
    cholesterol: number | null
    uricAcid: number | null
  }

  export type DailyMonitoringMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    glucoseLevel: number | null
    bloodPressure: number | null
    cholesterol: number | null
    uricAcid: number | null
  }

  export type DailyMonitoringMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    glucoseLevel: number | null
    bloodPressure: number | null
    cholesterol: number | null
    uricAcid: number | null
  }

  export type DailyMonitoringCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    glucoseLevel: number
    bloodPressure: number
    cholesterol: number
    uricAcid: number
    _all: number
  }


  export type DailyMonitoringAvgAggregateInputType = {
    glucoseLevel?: true
    bloodPressure?: true
    cholesterol?: true
    uricAcid?: true
  }

  export type DailyMonitoringSumAggregateInputType = {
    glucoseLevel?: true
    bloodPressure?: true
    cholesterol?: true
    uricAcid?: true
  }

  export type DailyMonitoringMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    glucoseLevel?: true
    bloodPressure?: true
    cholesterol?: true
    uricAcid?: true
  }

  export type DailyMonitoringMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    glucoseLevel?: true
    bloodPressure?: true
    cholesterol?: true
    uricAcid?: true
  }

  export type DailyMonitoringCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    glucoseLevel?: true
    bloodPressure?: true
    cholesterol?: true
    uricAcid?: true
    _all?: true
  }

  export type DailyMonitoringAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMonitoring to aggregate.
     */
    where?: DailyMonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMonitorings to fetch.
     */
    orderBy?: DailyMonitoringOrderByWithRelationInput | DailyMonitoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyMonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMonitorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMonitorings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyMonitorings
    **/
    _count?: true | DailyMonitoringCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyMonitoringAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyMonitoringSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyMonitoringMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyMonitoringMaxAggregateInputType
  }

  export type GetDailyMonitoringAggregateType<T extends DailyMonitoringAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyMonitoring]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyMonitoring[P]>
      : GetScalarType<T[P], AggregateDailyMonitoring[P]>
  }




  export type DailyMonitoringGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMonitoringWhereInput
    orderBy?: DailyMonitoringOrderByWithAggregationInput | DailyMonitoringOrderByWithAggregationInput[]
    by: DailyMonitoringScalarFieldEnum[] | DailyMonitoringScalarFieldEnum
    having?: DailyMonitoringScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyMonitoringCountAggregateInputType | true
    _avg?: DailyMonitoringAvgAggregateInputType
    _sum?: DailyMonitoringSumAggregateInputType
    _min?: DailyMonitoringMinAggregateInputType
    _max?: DailyMonitoringMaxAggregateInputType
  }

  export type DailyMonitoringGroupByOutputType = {
    id: string
    userId: string
    date: Date
    glucoseLevel: number
    bloodPressure: number
    cholesterol: number
    uricAcid: number
    _count: DailyMonitoringCountAggregateOutputType | null
    _avg: DailyMonitoringAvgAggregateOutputType | null
    _sum: DailyMonitoringSumAggregateOutputType | null
    _min: DailyMonitoringMinAggregateOutputType | null
    _max: DailyMonitoringMaxAggregateOutputType | null
  }

  type GetDailyMonitoringGroupByPayload<T extends DailyMonitoringGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyMonitoringGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyMonitoringGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyMonitoringGroupByOutputType[P]>
            : GetScalarType<T[P], DailyMonitoringGroupByOutputType[P]>
        }
      >
    >


  export type DailyMonitoringSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    glucoseLevel?: boolean
    bloodPressure?: boolean
    cholesterol?: boolean
    uricAcid?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyMonitoring"]>

  export type DailyMonitoringSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    glucoseLevel?: boolean
    bloodPressure?: boolean
    cholesterol?: boolean
    uricAcid?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyMonitoring"]>

  export type DailyMonitoringSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    glucoseLevel?: boolean
    bloodPressure?: boolean
    cholesterol?: boolean
    uricAcid?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyMonitoring"]>

  export type DailyMonitoringSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    glucoseLevel?: boolean
    bloodPressure?: boolean
    cholesterol?: boolean
    uricAcid?: boolean
  }

  export type DailyMonitoringOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "glucoseLevel" | "bloodPressure" | "cholesterol" | "uricAcid", ExtArgs["result"]["dailyMonitoring"]>
  export type DailyMonitoringInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type DailyMonitoringIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type DailyMonitoringIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $DailyMonitoringPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyMonitoring"
    objects: {
      user: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      glucoseLevel: number
      bloodPressure: number
      cholesterol: number
      uricAcid: number
    }, ExtArgs["result"]["dailyMonitoring"]>
    composites: {}
  }

  type DailyMonitoringGetPayload<S extends boolean | null | undefined | DailyMonitoringDefaultArgs> = $Result.GetResult<Prisma.$DailyMonitoringPayload, S>

  type DailyMonitoringCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyMonitoringFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyMonitoringCountAggregateInputType | true
    }

  export interface DailyMonitoringDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyMonitoring'], meta: { name: 'DailyMonitoring' } }
    /**
     * Find zero or one DailyMonitoring that matches the filter.
     * @param {DailyMonitoringFindUniqueArgs} args - Arguments to find a DailyMonitoring
     * @example
     * // Get one DailyMonitoring
     * const dailyMonitoring = await prisma.dailyMonitoring.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyMonitoringFindUniqueArgs>(args: SelectSubset<T, DailyMonitoringFindUniqueArgs<ExtArgs>>): Prisma__DailyMonitoringClient<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyMonitoring that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyMonitoringFindUniqueOrThrowArgs} args - Arguments to find a DailyMonitoring
     * @example
     * // Get one DailyMonitoring
     * const dailyMonitoring = await prisma.dailyMonitoring.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyMonitoringFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyMonitoringFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyMonitoringClient<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyMonitoring that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonitoringFindFirstArgs} args - Arguments to find a DailyMonitoring
     * @example
     * // Get one DailyMonitoring
     * const dailyMonitoring = await prisma.dailyMonitoring.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyMonitoringFindFirstArgs>(args?: SelectSubset<T, DailyMonitoringFindFirstArgs<ExtArgs>>): Prisma__DailyMonitoringClient<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyMonitoring that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonitoringFindFirstOrThrowArgs} args - Arguments to find a DailyMonitoring
     * @example
     * // Get one DailyMonitoring
     * const dailyMonitoring = await prisma.dailyMonitoring.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyMonitoringFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyMonitoringFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyMonitoringClient<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyMonitorings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonitoringFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyMonitorings
     * const dailyMonitorings = await prisma.dailyMonitoring.findMany()
     * 
     * // Get first 10 DailyMonitorings
     * const dailyMonitorings = await prisma.dailyMonitoring.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyMonitoringWithIdOnly = await prisma.dailyMonitoring.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyMonitoringFindManyArgs>(args?: SelectSubset<T, DailyMonitoringFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyMonitoring.
     * @param {DailyMonitoringCreateArgs} args - Arguments to create a DailyMonitoring.
     * @example
     * // Create one DailyMonitoring
     * const DailyMonitoring = await prisma.dailyMonitoring.create({
     *   data: {
     *     // ... data to create a DailyMonitoring
     *   }
     * })
     * 
     */
    create<T extends DailyMonitoringCreateArgs>(args: SelectSubset<T, DailyMonitoringCreateArgs<ExtArgs>>): Prisma__DailyMonitoringClient<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyMonitorings.
     * @param {DailyMonitoringCreateManyArgs} args - Arguments to create many DailyMonitorings.
     * @example
     * // Create many DailyMonitorings
     * const dailyMonitoring = await prisma.dailyMonitoring.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyMonitoringCreateManyArgs>(args?: SelectSubset<T, DailyMonitoringCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyMonitorings and returns the data saved in the database.
     * @param {DailyMonitoringCreateManyAndReturnArgs} args - Arguments to create many DailyMonitorings.
     * @example
     * // Create many DailyMonitorings
     * const dailyMonitoring = await prisma.dailyMonitoring.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyMonitorings and only return the `id`
     * const dailyMonitoringWithIdOnly = await prisma.dailyMonitoring.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyMonitoringCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyMonitoringCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyMonitoring.
     * @param {DailyMonitoringDeleteArgs} args - Arguments to delete one DailyMonitoring.
     * @example
     * // Delete one DailyMonitoring
     * const DailyMonitoring = await prisma.dailyMonitoring.delete({
     *   where: {
     *     // ... filter to delete one DailyMonitoring
     *   }
     * })
     * 
     */
    delete<T extends DailyMonitoringDeleteArgs>(args: SelectSubset<T, DailyMonitoringDeleteArgs<ExtArgs>>): Prisma__DailyMonitoringClient<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyMonitoring.
     * @param {DailyMonitoringUpdateArgs} args - Arguments to update one DailyMonitoring.
     * @example
     * // Update one DailyMonitoring
     * const dailyMonitoring = await prisma.dailyMonitoring.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyMonitoringUpdateArgs>(args: SelectSubset<T, DailyMonitoringUpdateArgs<ExtArgs>>): Prisma__DailyMonitoringClient<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyMonitorings.
     * @param {DailyMonitoringDeleteManyArgs} args - Arguments to filter DailyMonitorings to delete.
     * @example
     * // Delete a few DailyMonitorings
     * const { count } = await prisma.dailyMonitoring.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyMonitoringDeleteManyArgs>(args?: SelectSubset<T, DailyMonitoringDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyMonitorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonitoringUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyMonitorings
     * const dailyMonitoring = await prisma.dailyMonitoring.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyMonitoringUpdateManyArgs>(args: SelectSubset<T, DailyMonitoringUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyMonitorings and returns the data updated in the database.
     * @param {DailyMonitoringUpdateManyAndReturnArgs} args - Arguments to update many DailyMonitorings.
     * @example
     * // Update many DailyMonitorings
     * const dailyMonitoring = await prisma.dailyMonitoring.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyMonitorings and only return the `id`
     * const dailyMonitoringWithIdOnly = await prisma.dailyMonitoring.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyMonitoringUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyMonitoringUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyMonitoring.
     * @param {DailyMonitoringUpsertArgs} args - Arguments to update or create a DailyMonitoring.
     * @example
     * // Update or create a DailyMonitoring
     * const dailyMonitoring = await prisma.dailyMonitoring.upsert({
     *   create: {
     *     // ... data to create a DailyMonitoring
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyMonitoring we want to update
     *   }
     * })
     */
    upsert<T extends DailyMonitoringUpsertArgs>(args: SelectSubset<T, DailyMonitoringUpsertArgs<ExtArgs>>): Prisma__DailyMonitoringClient<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyMonitorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonitoringCountArgs} args - Arguments to filter DailyMonitorings to count.
     * @example
     * // Count the number of DailyMonitorings
     * const count = await prisma.dailyMonitoring.count({
     *   where: {
     *     // ... the filter for the DailyMonitorings we want to count
     *   }
     * })
    **/
    count<T extends DailyMonitoringCountArgs>(
      args?: Subset<T, DailyMonitoringCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyMonitoringCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyMonitoring.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonitoringAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyMonitoringAggregateArgs>(args: Subset<T, DailyMonitoringAggregateArgs>): Prisma.PrismaPromise<GetDailyMonitoringAggregateType<T>>

    /**
     * Group by DailyMonitoring.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonitoringGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyMonitoringGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyMonitoringGroupByArgs['orderBy'] }
        : { orderBy?: DailyMonitoringGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyMonitoringGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyMonitoringGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyMonitoring model
   */
  readonly fields: DailyMonitoringFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyMonitoring.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyMonitoringClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyMonitoring model
   */
  interface DailyMonitoringFieldRefs {
    readonly id: FieldRef<"DailyMonitoring", 'String'>
    readonly userId: FieldRef<"DailyMonitoring", 'String'>
    readonly date: FieldRef<"DailyMonitoring", 'DateTime'>
    readonly glucoseLevel: FieldRef<"DailyMonitoring", 'Float'>
    readonly bloodPressure: FieldRef<"DailyMonitoring", 'Float'>
    readonly cholesterol: FieldRef<"DailyMonitoring", 'Float'>
    readonly uricAcid: FieldRef<"DailyMonitoring", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * DailyMonitoring findUnique
   */
  export type DailyMonitoringFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
    /**
     * Filter, which DailyMonitoring to fetch.
     */
    where: DailyMonitoringWhereUniqueInput
  }

  /**
   * DailyMonitoring findUniqueOrThrow
   */
  export type DailyMonitoringFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
    /**
     * Filter, which DailyMonitoring to fetch.
     */
    where: DailyMonitoringWhereUniqueInput
  }

  /**
   * DailyMonitoring findFirst
   */
  export type DailyMonitoringFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
    /**
     * Filter, which DailyMonitoring to fetch.
     */
    where?: DailyMonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMonitorings to fetch.
     */
    orderBy?: DailyMonitoringOrderByWithRelationInput | DailyMonitoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMonitorings.
     */
    cursor?: DailyMonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMonitorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMonitorings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMonitorings.
     */
    distinct?: DailyMonitoringScalarFieldEnum | DailyMonitoringScalarFieldEnum[]
  }

  /**
   * DailyMonitoring findFirstOrThrow
   */
  export type DailyMonitoringFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
    /**
     * Filter, which DailyMonitoring to fetch.
     */
    where?: DailyMonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMonitorings to fetch.
     */
    orderBy?: DailyMonitoringOrderByWithRelationInput | DailyMonitoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMonitorings.
     */
    cursor?: DailyMonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMonitorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMonitorings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMonitorings.
     */
    distinct?: DailyMonitoringScalarFieldEnum | DailyMonitoringScalarFieldEnum[]
  }

  /**
   * DailyMonitoring findMany
   */
  export type DailyMonitoringFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
    /**
     * Filter, which DailyMonitorings to fetch.
     */
    where?: DailyMonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMonitorings to fetch.
     */
    orderBy?: DailyMonitoringOrderByWithRelationInput | DailyMonitoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyMonitorings.
     */
    cursor?: DailyMonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMonitorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMonitorings.
     */
    skip?: number
    distinct?: DailyMonitoringScalarFieldEnum | DailyMonitoringScalarFieldEnum[]
  }

  /**
   * DailyMonitoring create
   */
  export type DailyMonitoringCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyMonitoring.
     */
    data: XOR<DailyMonitoringCreateInput, DailyMonitoringUncheckedCreateInput>
  }

  /**
   * DailyMonitoring createMany
   */
  export type DailyMonitoringCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyMonitorings.
     */
    data: DailyMonitoringCreateManyInput | DailyMonitoringCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyMonitoring createManyAndReturn
   */
  export type DailyMonitoringCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * The data used to create many DailyMonitorings.
     */
    data: DailyMonitoringCreateManyInput | DailyMonitoringCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyMonitoring update
   */
  export type DailyMonitoringUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyMonitoring.
     */
    data: XOR<DailyMonitoringUpdateInput, DailyMonitoringUncheckedUpdateInput>
    /**
     * Choose, which DailyMonitoring to update.
     */
    where: DailyMonitoringWhereUniqueInput
  }

  /**
   * DailyMonitoring updateMany
   */
  export type DailyMonitoringUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyMonitorings.
     */
    data: XOR<DailyMonitoringUpdateManyMutationInput, DailyMonitoringUncheckedUpdateManyInput>
    /**
     * Filter which DailyMonitorings to update
     */
    where?: DailyMonitoringWhereInput
    /**
     * Limit how many DailyMonitorings to update.
     */
    limit?: number
  }

  /**
   * DailyMonitoring updateManyAndReturn
   */
  export type DailyMonitoringUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * The data used to update DailyMonitorings.
     */
    data: XOR<DailyMonitoringUpdateManyMutationInput, DailyMonitoringUncheckedUpdateManyInput>
    /**
     * Filter which DailyMonitorings to update
     */
    where?: DailyMonitoringWhereInput
    /**
     * Limit how many DailyMonitorings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyMonitoring upsert
   */
  export type DailyMonitoringUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyMonitoring to update in case it exists.
     */
    where: DailyMonitoringWhereUniqueInput
    /**
     * In case the DailyMonitoring found by the `where` argument doesn't exist, create a new DailyMonitoring with this data.
     */
    create: XOR<DailyMonitoringCreateInput, DailyMonitoringUncheckedCreateInput>
    /**
     * In case the DailyMonitoring was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyMonitoringUpdateInput, DailyMonitoringUncheckedUpdateInput>
  }

  /**
   * DailyMonitoring delete
   */
  export type DailyMonitoringDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
    /**
     * Filter which DailyMonitoring to delete.
     */
    where: DailyMonitoringWhereUniqueInput
  }

  /**
   * DailyMonitoring deleteMany
   */
  export type DailyMonitoringDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMonitorings to delete
     */
    where?: DailyMonitoringWhereInput
    /**
     * Limit how many DailyMonitorings to delete.
     */
    limit?: number
  }

  /**
   * DailyMonitoring without action
   */
  export type DailyMonitoringDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    userId: string | null
    height: number | null
    weight: number | null
  }

  export type UserProfileMaxAggregateOutputType = {
    userId: string | null
    height: number | null
    weight: number | null
  }

  export type UserProfileCountAggregateOutputType = {
    userId: number
    height: number
    weight: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserProfileSumAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserProfileMinAggregateInputType = {
    userId?: true
    height?: true
    weight?: true
  }

  export type UserProfileMaxAggregateInputType = {
    userId?: true
    height?: true
    weight?: true
  }

  export type UserProfileCountAggregateInputType = {
    userId?: true
    height?: true
    weight?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    userId: string
    height: number
    weight: number
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    height?: boolean
    weight?: boolean
    monitorings?: boolean | UserProfile$monitoringsArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    height?: boolean
    weight?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    height?: boolean
    weight?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    userId?: boolean
    height?: boolean
    weight?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "height" | "weight", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitorings?: boolean | UserProfile$monitoringsArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      monitorings: Prisma.$DailyMonitoringPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      height: number
      weight: number
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monitorings<T extends UserProfile$monitoringsArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$monitoringsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMonitoringPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly height: FieldRef<"UserProfile", 'Float'>
    readonly weight: FieldRef<"UserProfile", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile.monitorings
   */
  export type UserProfile$monitoringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonitoring
     */
    select?: DailyMonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMonitoring
     */
    omit?: DailyMonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonitoringInclude<ExtArgs> | null
    where?: DailyMonitoringWhereInput
    orderBy?: DailyMonitoringOrderByWithRelationInput | DailyMonitoringOrderByWithRelationInput[]
    cursor?: DailyMonitoringWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyMonitoringScalarFieldEnum | DailyMonitoringScalarFieldEnum[]
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DailyMonitoringScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    glucoseLevel: 'glucoseLevel',
    bloodPressure: 'bloodPressure',
    cholesterol: 'cholesterol',
    uricAcid: 'uricAcid'
  };

  export type DailyMonitoringScalarFieldEnum = (typeof DailyMonitoringScalarFieldEnum)[keyof typeof DailyMonitoringScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    userId: 'userId',
    height: 'height',
    weight: 'weight'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DailyMonitoringWhereInput = {
    AND?: DailyMonitoringWhereInput | DailyMonitoringWhereInput[]
    OR?: DailyMonitoringWhereInput[]
    NOT?: DailyMonitoringWhereInput | DailyMonitoringWhereInput[]
    id?: StringFilter<"DailyMonitoring"> | string
    userId?: StringFilter<"DailyMonitoring"> | string
    date?: DateTimeFilter<"DailyMonitoring"> | Date | string
    glucoseLevel?: FloatFilter<"DailyMonitoring"> | number
    bloodPressure?: FloatFilter<"DailyMonitoring"> | number
    cholesterol?: FloatFilter<"DailyMonitoring"> | number
    uricAcid?: FloatFilter<"DailyMonitoring"> | number
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type DailyMonitoringOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    glucoseLevel?: SortOrder
    bloodPressure?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
    user?: UserProfileOrderByWithRelationInput
  }

  export type DailyMonitoringWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyMonitoringUserIdDateCompoundUniqueInput
    AND?: DailyMonitoringWhereInput | DailyMonitoringWhereInput[]
    OR?: DailyMonitoringWhereInput[]
    NOT?: DailyMonitoringWhereInput | DailyMonitoringWhereInput[]
    userId?: StringFilter<"DailyMonitoring"> | string
    date?: DateTimeFilter<"DailyMonitoring"> | Date | string
    glucoseLevel?: FloatFilter<"DailyMonitoring"> | number
    bloodPressure?: FloatFilter<"DailyMonitoring"> | number
    cholesterol?: FloatFilter<"DailyMonitoring"> | number
    uricAcid?: FloatFilter<"DailyMonitoring"> | number
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id" | "userId_date">

  export type DailyMonitoringOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    glucoseLevel?: SortOrder
    bloodPressure?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
    _count?: DailyMonitoringCountOrderByAggregateInput
    _avg?: DailyMonitoringAvgOrderByAggregateInput
    _max?: DailyMonitoringMaxOrderByAggregateInput
    _min?: DailyMonitoringMinOrderByAggregateInput
    _sum?: DailyMonitoringSumOrderByAggregateInput
  }

  export type DailyMonitoringScalarWhereWithAggregatesInput = {
    AND?: DailyMonitoringScalarWhereWithAggregatesInput | DailyMonitoringScalarWhereWithAggregatesInput[]
    OR?: DailyMonitoringScalarWhereWithAggregatesInput[]
    NOT?: DailyMonitoringScalarWhereWithAggregatesInput | DailyMonitoringScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyMonitoring"> | string
    userId?: StringWithAggregatesFilter<"DailyMonitoring"> | string
    date?: DateTimeWithAggregatesFilter<"DailyMonitoring"> | Date | string
    glucoseLevel?: FloatWithAggregatesFilter<"DailyMonitoring"> | number
    bloodPressure?: FloatWithAggregatesFilter<"DailyMonitoring"> | number
    cholesterol?: FloatWithAggregatesFilter<"DailyMonitoring"> | number
    uricAcid?: FloatWithAggregatesFilter<"DailyMonitoring"> | number
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    userId?: StringFilter<"UserProfile"> | string
    height?: FloatFilter<"UserProfile"> | number
    weight?: FloatFilter<"UserProfile"> | number
    monitorings?: DailyMonitoringListRelationFilter
  }

  export type UserProfileOrderByWithRelationInput = {
    userId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    monitorings?: DailyMonitoringOrderByRelationAggregateInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    height?: FloatFilter<"UserProfile"> | number
    weight?: FloatFilter<"UserProfile"> | number
    monitorings?: DailyMonitoringListRelationFilter
  }, "userId">

  export type UserProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    height?: FloatWithAggregatesFilter<"UserProfile"> | number
    weight?: FloatWithAggregatesFilter<"UserProfile"> | number
  }

  export type DailyMonitoringCreateInput = {
    id?: string
    date?: Date | string
    glucoseLevel: number
    bloodPressure: number
    cholesterol: number
    uricAcid: number
    user: UserProfileCreateNestedOneWithoutMonitoringsInput
  }

  export type DailyMonitoringUncheckedCreateInput = {
    id?: string
    userId: string
    date?: Date | string
    glucoseLevel: number
    bloodPressure: number
    cholesterol: number
    uricAcid: number
  }

  export type DailyMonitoringUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseLevel?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: FloatFieldUpdateOperationsInput | number
    cholesterol?: FloatFieldUpdateOperationsInput | number
    uricAcid?: FloatFieldUpdateOperationsInput | number
    user?: UserProfileUpdateOneRequiredWithoutMonitoringsNestedInput
  }

  export type DailyMonitoringUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseLevel?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: FloatFieldUpdateOperationsInput | number
    cholesterol?: FloatFieldUpdateOperationsInput | number
    uricAcid?: FloatFieldUpdateOperationsInput | number
  }

  export type DailyMonitoringCreateManyInput = {
    id?: string
    userId: string
    date?: Date | string
    glucoseLevel: number
    bloodPressure: number
    cholesterol: number
    uricAcid: number
  }

  export type DailyMonitoringUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseLevel?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: FloatFieldUpdateOperationsInput | number
    cholesterol?: FloatFieldUpdateOperationsInput | number
    uricAcid?: FloatFieldUpdateOperationsInput | number
  }

  export type DailyMonitoringUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseLevel?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: FloatFieldUpdateOperationsInput | number
    cholesterol?: FloatFieldUpdateOperationsInput | number
    uricAcid?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileCreateInput = {
    userId: string
    height: number
    weight: number
    monitorings?: DailyMonitoringCreateNestedManyWithoutUserInput
  }

  export type UserProfileUncheckedCreateInput = {
    userId: string
    height: number
    weight: number
    monitorings?: DailyMonitoringUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserProfileUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    monitorings?: DailyMonitoringUpdateManyWithoutUserNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    monitorings?: DailyMonitoringUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserProfileCreateManyInput = {
    userId: string
    height: number
    weight: number
  }

  export type UserProfileUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserProfileScalarRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type DailyMonitoringUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type DailyMonitoringCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    glucoseLevel?: SortOrder
    bloodPressure?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
  }

  export type DailyMonitoringAvgOrderByAggregateInput = {
    glucoseLevel?: SortOrder
    bloodPressure?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
  }

  export type DailyMonitoringMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    glucoseLevel?: SortOrder
    bloodPressure?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
  }

  export type DailyMonitoringMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    glucoseLevel?: SortOrder
    bloodPressure?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
  }

  export type DailyMonitoringSumOrderByAggregateInput = {
    glucoseLevel?: SortOrder
    bloodPressure?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DailyMonitoringListRelationFilter = {
    every?: DailyMonitoringWhereInput
    some?: DailyMonitoringWhereInput
    none?: DailyMonitoringWhereInput
  }

  export type DailyMonitoringOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutMonitoringsInput = {
    create?: XOR<UserProfileCreateWithoutMonitoringsInput, UserProfileUncheckedCreateWithoutMonitoringsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutMonitoringsInput
    connect?: UserProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProfileUpdateOneRequiredWithoutMonitoringsNestedInput = {
    create?: XOR<UserProfileCreateWithoutMonitoringsInput, UserProfileUncheckedCreateWithoutMonitoringsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutMonitoringsInput
    upsert?: UserProfileUpsertWithoutMonitoringsInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutMonitoringsInput, UserProfileUpdateWithoutMonitoringsInput>, UserProfileUncheckedUpdateWithoutMonitoringsInput>
  }

  export type DailyMonitoringCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyMonitoringCreateWithoutUserInput, DailyMonitoringUncheckedCreateWithoutUserInput> | DailyMonitoringCreateWithoutUserInput[] | DailyMonitoringUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyMonitoringCreateOrConnectWithoutUserInput | DailyMonitoringCreateOrConnectWithoutUserInput[]
    createMany?: DailyMonitoringCreateManyUserInputEnvelope
    connect?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
  }

  export type DailyMonitoringUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyMonitoringCreateWithoutUserInput, DailyMonitoringUncheckedCreateWithoutUserInput> | DailyMonitoringCreateWithoutUserInput[] | DailyMonitoringUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyMonitoringCreateOrConnectWithoutUserInput | DailyMonitoringCreateOrConnectWithoutUserInput[]
    createMany?: DailyMonitoringCreateManyUserInputEnvelope
    connect?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
  }

  export type DailyMonitoringUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyMonitoringCreateWithoutUserInput, DailyMonitoringUncheckedCreateWithoutUserInput> | DailyMonitoringCreateWithoutUserInput[] | DailyMonitoringUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyMonitoringCreateOrConnectWithoutUserInput | DailyMonitoringCreateOrConnectWithoutUserInput[]
    upsert?: DailyMonitoringUpsertWithWhereUniqueWithoutUserInput | DailyMonitoringUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyMonitoringCreateManyUserInputEnvelope
    set?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
    disconnect?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
    delete?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
    connect?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
    update?: DailyMonitoringUpdateWithWhereUniqueWithoutUserInput | DailyMonitoringUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyMonitoringUpdateManyWithWhereWithoutUserInput | DailyMonitoringUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyMonitoringScalarWhereInput | DailyMonitoringScalarWhereInput[]
  }

  export type DailyMonitoringUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyMonitoringCreateWithoutUserInput, DailyMonitoringUncheckedCreateWithoutUserInput> | DailyMonitoringCreateWithoutUserInput[] | DailyMonitoringUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyMonitoringCreateOrConnectWithoutUserInput | DailyMonitoringCreateOrConnectWithoutUserInput[]
    upsert?: DailyMonitoringUpsertWithWhereUniqueWithoutUserInput | DailyMonitoringUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyMonitoringCreateManyUserInputEnvelope
    set?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
    disconnect?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
    delete?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
    connect?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
    update?: DailyMonitoringUpdateWithWhereUniqueWithoutUserInput | DailyMonitoringUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyMonitoringUpdateManyWithWhereWithoutUserInput | DailyMonitoringUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyMonitoringScalarWhereInput | DailyMonitoringScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutMonitoringsInput = {
    userId: string
    height: number
    weight: number
  }

  export type UserProfileUncheckedCreateWithoutMonitoringsInput = {
    userId: string
    height: number
    weight: number
  }

  export type UserProfileCreateOrConnectWithoutMonitoringsInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutMonitoringsInput, UserProfileUncheckedCreateWithoutMonitoringsInput>
  }

  export type UserProfileUpsertWithoutMonitoringsInput = {
    update: XOR<UserProfileUpdateWithoutMonitoringsInput, UserProfileUncheckedUpdateWithoutMonitoringsInput>
    create: XOR<UserProfileCreateWithoutMonitoringsInput, UserProfileUncheckedCreateWithoutMonitoringsInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutMonitoringsInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutMonitoringsInput, UserProfileUncheckedUpdateWithoutMonitoringsInput>
  }

  export type UserProfileUpdateWithoutMonitoringsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileUncheckedUpdateWithoutMonitoringsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type DailyMonitoringCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    glucoseLevel: number
    bloodPressure: number
    cholesterol: number
    uricAcid: number
  }

  export type DailyMonitoringUncheckedCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    glucoseLevel: number
    bloodPressure: number
    cholesterol: number
    uricAcid: number
  }

  export type DailyMonitoringCreateOrConnectWithoutUserInput = {
    where: DailyMonitoringWhereUniqueInput
    create: XOR<DailyMonitoringCreateWithoutUserInput, DailyMonitoringUncheckedCreateWithoutUserInput>
  }

  export type DailyMonitoringCreateManyUserInputEnvelope = {
    data: DailyMonitoringCreateManyUserInput | DailyMonitoringCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyMonitoringUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyMonitoringWhereUniqueInput
    update: XOR<DailyMonitoringUpdateWithoutUserInput, DailyMonitoringUncheckedUpdateWithoutUserInput>
    create: XOR<DailyMonitoringCreateWithoutUserInput, DailyMonitoringUncheckedCreateWithoutUserInput>
  }

  export type DailyMonitoringUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyMonitoringWhereUniqueInput
    data: XOR<DailyMonitoringUpdateWithoutUserInput, DailyMonitoringUncheckedUpdateWithoutUserInput>
  }

  export type DailyMonitoringUpdateManyWithWhereWithoutUserInput = {
    where: DailyMonitoringScalarWhereInput
    data: XOR<DailyMonitoringUpdateManyMutationInput, DailyMonitoringUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyMonitoringScalarWhereInput = {
    AND?: DailyMonitoringScalarWhereInput | DailyMonitoringScalarWhereInput[]
    OR?: DailyMonitoringScalarWhereInput[]
    NOT?: DailyMonitoringScalarWhereInput | DailyMonitoringScalarWhereInput[]
    id?: StringFilter<"DailyMonitoring"> | string
    userId?: StringFilter<"DailyMonitoring"> | string
    date?: DateTimeFilter<"DailyMonitoring"> | Date | string
    glucoseLevel?: FloatFilter<"DailyMonitoring"> | number
    bloodPressure?: FloatFilter<"DailyMonitoring"> | number
    cholesterol?: FloatFilter<"DailyMonitoring"> | number
    uricAcid?: FloatFilter<"DailyMonitoring"> | number
  }

  export type DailyMonitoringCreateManyUserInput = {
    id?: string
    date?: Date | string
    glucoseLevel: number
    bloodPressure: number
    cholesterol: number
    uricAcid: number
  }

  export type DailyMonitoringUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseLevel?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: FloatFieldUpdateOperationsInput | number
    cholesterol?: FloatFieldUpdateOperationsInput | number
    uricAcid?: FloatFieldUpdateOperationsInput | number
  }

  export type DailyMonitoringUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseLevel?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: FloatFieldUpdateOperationsInput | number
    cholesterol?: FloatFieldUpdateOperationsInput | number
    uricAcid?: FloatFieldUpdateOperationsInput | number
  }

  export type DailyMonitoringUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseLevel?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: FloatFieldUpdateOperationsInput | number
    cholesterol?: FloatFieldUpdateOperationsInput | number
    uricAcid?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}