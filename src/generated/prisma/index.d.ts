
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
 * Model DietTracking
 * 
 */
export type DietTracking = $Result.DefaultSelection<Prisma.$DietTrackingPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model FoodItem
 * 
 */
export type FoodItem = $Result.DefaultSelection<Prisma.$FoodItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MealCategory: {
  BREAKFAST: 'BREAKFAST',
  LUNCH: 'LUNCH',
  DINNER: 'DINNER',
  SNACK: 'SNACK'
};

export type MealCategory = (typeof MealCategory)[keyof typeof MealCategory]

}

export type MealCategory = $Enums.MealCategory

export const MealCategory: typeof $Enums.MealCategory

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

  /**
   * `prisma.dietTracking`: Exposes CRUD operations for the **DietTracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DietTrackings
    * const dietTrackings = await prisma.dietTracking.findMany()
    * ```
    */
  get dietTracking(): Prisma.DietTrackingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodItem`: Exposes CRUD operations for the **FoodItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodItems
    * const foodItems = await prisma.foodItem.findMany()
    * ```
    */
  get foodItem(): Prisma.FoodItemDelegate<ExtArgs, ClientOptions>;
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
    UserProfile: 'UserProfile',
    DietTracking: 'DietTracking',
    Meal: 'Meal',
    FoodItem: 'FoodItem'
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
      modelProps: "dailyMonitoring" | "userProfile" | "dietTracking" | "meal" | "foodItem"
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
      DietTracking: {
        payload: Prisma.$DietTrackingPayload<ExtArgs>
        fields: Prisma.DietTrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DietTrackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DietTrackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload>
          }
          findFirst: {
            args: Prisma.DietTrackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DietTrackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload>
          }
          findMany: {
            args: Prisma.DietTrackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload>[]
          }
          create: {
            args: Prisma.DietTrackingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload>
          }
          createMany: {
            args: Prisma.DietTrackingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DietTrackingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload>[]
          }
          delete: {
            args: Prisma.DietTrackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload>
          }
          update: {
            args: Prisma.DietTrackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload>
          }
          deleteMany: {
            args: Prisma.DietTrackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DietTrackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DietTrackingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload>[]
          }
          upsert: {
            args: Prisma.DietTrackingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietTrackingPayload>
          }
          aggregate: {
            args: Prisma.DietTrackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDietTracking>
          }
          groupBy: {
            args: Prisma.DietTrackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DietTrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DietTrackingCountArgs<ExtArgs>
            result: $Utils.Optional<DietTrackingCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      FoodItem: {
        payload: Prisma.$FoodItemPayload<ExtArgs>
        fields: Prisma.FoodItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findFirst: {
            args: Prisma.FoodItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findMany: {
            args: Prisma.FoodItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          create: {
            args: Prisma.FoodItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          createMany: {
            args: Prisma.FoodItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          delete: {
            args: Prisma.FoodItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          update: {
            args: Prisma.FoodItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          deleteMany: {
            args: Prisma.FoodItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          upsert: {
            args: Prisma.FoodItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          aggregate: {
            args: Prisma.FoodItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodItem>
          }
          groupBy: {
            args: Prisma.FoodItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodItemCountArgs<ExtArgs>
            result: $Utils.Optional<FoodItemCountAggregateOutputType> | number
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
    dietTracking?: DietTrackingOmit
    meal?: MealOmit
    foodItem?: FoodItemOmit
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
    meals: number
    dietTracking: number
    monitorings: number
  }

  export type UserProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | UserProfileCountOutputTypeCountMealsArgs
    dietTracking?: boolean | UserProfileCountOutputTypeCountDietTrackingArgs
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
  export type UserProfileCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountDietTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietTrackingWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountMonitoringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMonitoringWhereInput
  }


  /**
   * Count Type DietTrackingCountOutputType
   */

  export type DietTrackingCountOutputType = {
    meals: number
  }

  export type DietTrackingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | DietTrackingCountOutputTypeCountMealsArgs
  }

  // Custom InputTypes
  /**
   * DietTrackingCountOutputType without action
   */
  export type DietTrackingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTrackingCountOutputType
     */
    select?: DietTrackingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DietTrackingCountOutputType without action
   */
  export type DietTrackingCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
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
    meals?: boolean | UserProfile$mealsArgs<ExtArgs>
    dietTracking?: boolean | UserProfile$dietTrackingArgs<ExtArgs>
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
    meals?: boolean | UserProfile$mealsArgs<ExtArgs>
    dietTracking?: boolean | UserProfile$dietTrackingArgs<ExtArgs>
    monitorings?: boolean | UserProfile$monitoringsArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      meals: Prisma.$MealPayload<ExtArgs>[]
      dietTracking: Prisma.$DietTrackingPayload<ExtArgs>[]
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
    meals<T extends UserProfile$mealsArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dietTracking<T extends UserProfile$dietTrackingArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$dietTrackingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * UserProfile.meals
   */
  export type UserProfile$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * UserProfile.dietTracking
   */
  export type UserProfile$dietTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    where?: DietTrackingWhereInput
    orderBy?: DietTrackingOrderByWithRelationInput | DietTrackingOrderByWithRelationInput[]
    cursor?: DietTrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DietTrackingScalarFieldEnum | DietTrackingScalarFieldEnum[]
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
   * Model DietTracking
   */

  export type AggregateDietTracking = {
    _count: DietTrackingCountAggregateOutputType | null
    _avg: DietTrackingAvgAggregateOutputType | null
    _sum: DietTrackingSumAggregateOutputType | null
    _min: DietTrackingMinAggregateOutputType | null
    _max: DietTrackingMaxAggregateOutputType | null
  }

  export type DietTrackingAvgAggregateOutputType = {
    totalCalories: number | null
    totalCarbs: number | null
    totalProtein: number | null
    totalFat: number | null
  }

  export type DietTrackingSumAggregateOutputType = {
    totalCalories: number | null
    totalCarbs: number | null
    totalProtein: number | null
    totalFat: number | null
  }

  export type DietTrackingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    totalCalories: number | null
    totalCarbs: number | null
    totalProtein: number | null
    totalFat: number | null
  }

  export type DietTrackingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    totalCalories: number | null
    totalCarbs: number | null
    totalProtein: number | null
    totalFat: number | null
  }

  export type DietTrackingCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    totalCalories: number
    totalCarbs: number
    totalProtein: number
    totalFat: number
    _all: number
  }


  export type DietTrackingAvgAggregateInputType = {
    totalCalories?: true
    totalCarbs?: true
    totalProtein?: true
    totalFat?: true
  }

  export type DietTrackingSumAggregateInputType = {
    totalCalories?: true
    totalCarbs?: true
    totalProtein?: true
    totalFat?: true
  }

  export type DietTrackingMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    totalCalories?: true
    totalCarbs?: true
    totalProtein?: true
    totalFat?: true
  }

  export type DietTrackingMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    totalCalories?: true
    totalCarbs?: true
    totalProtein?: true
    totalFat?: true
  }

  export type DietTrackingCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    totalCalories?: true
    totalCarbs?: true
    totalProtein?: true
    totalFat?: true
    _all?: true
  }

  export type DietTrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DietTracking to aggregate.
     */
    where?: DietTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietTrackings to fetch.
     */
    orderBy?: DietTrackingOrderByWithRelationInput | DietTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DietTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DietTrackings
    **/
    _count?: true | DietTrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DietTrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DietTrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DietTrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DietTrackingMaxAggregateInputType
  }

  export type GetDietTrackingAggregateType<T extends DietTrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateDietTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDietTracking[P]>
      : GetScalarType<T[P], AggregateDietTracking[P]>
  }




  export type DietTrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietTrackingWhereInput
    orderBy?: DietTrackingOrderByWithAggregationInput | DietTrackingOrderByWithAggregationInput[]
    by: DietTrackingScalarFieldEnum[] | DietTrackingScalarFieldEnum
    having?: DietTrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DietTrackingCountAggregateInputType | true
    _avg?: DietTrackingAvgAggregateInputType
    _sum?: DietTrackingSumAggregateInputType
    _min?: DietTrackingMinAggregateInputType
    _max?: DietTrackingMaxAggregateInputType
  }

  export type DietTrackingGroupByOutputType = {
    id: string
    userId: string
    date: Date
    totalCalories: number
    totalCarbs: number
    totalProtein: number
    totalFat: number
    _count: DietTrackingCountAggregateOutputType | null
    _avg: DietTrackingAvgAggregateOutputType | null
    _sum: DietTrackingSumAggregateOutputType | null
    _min: DietTrackingMinAggregateOutputType | null
    _max: DietTrackingMaxAggregateOutputType | null
  }

  type GetDietTrackingGroupByPayload<T extends DietTrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DietTrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DietTrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DietTrackingGroupByOutputType[P]>
            : GetScalarType<T[P], DietTrackingGroupByOutputType[P]>
        }
      >
    >


  export type DietTrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    totalCalories?: boolean
    totalCarbs?: boolean
    totalProtein?: boolean
    totalFat?: boolean
    meals?: boolean | DietTracking$mealsArgs<ExtArgs>
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
    _count?: boolean | DietTrackingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietTracking"]>

  export type DietTrackingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    totalCalories?: boolean
    totalCarbs?: boolean
    totalProtein?: boolean
    totalFat?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietTracking"]>

  export type DietTrackingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    totalCalories?: boolean
    totalCarbs?: boolean
    totalProtein?: boolean
    totalFat?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietTracking"]>

  export type DietTrackingSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    totalCalories?: boolean
    totalCarbs?: boolean
    totalProtein?: boolean
    totalFat?: boolean
  }

  export type DietTrackingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "totalCalories" | "totalCarbs" | "totalProtein" | "totalFat", ExtArgs["result"]["dietTracking"]>
  export type DietTrackingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | DietTracking$mealsArgs<ExtArgs>
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
    _count?: boolean | DietTrackingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DietTrackingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type DietTrackingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $DietTrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DietTracking"
    objects: {
      meals: Prisma.$MealPayload<ExtArgs>[]
      user: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      totalCalories: number
      totalCarbs: number
      totalProtein: number
      totalFat: number
    }, ExtArgs["result"]["dietTracking"]>
    composites: {}
  }

  type DietTrackingGetPayload<S extends boolean | null | undefined | DietTrackingDefaultArgs> = $Result.GetResult<Prisma.$DietTrackingPayload, S>

  type DietTrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DietTrackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DietTrackingCountAggregateInputType | true
    }

  export interface DietTrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DietTracking'], meta: { name: 'DietTracking' } }
    /**
     * Find zero or one DietTracking that matches the filter.
     * @param {DietTrackingFindUniqueArgs} args - Arguments to find a DietTracking
     * @example
     * // Get one DietTracking
     * const dietTracking = await prisma.dietTracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DietTrackingFindUniqueArgs>(args: SelectSubset<T, DietTrackingFindUniqueArgs<ExtArgs>>): Prisma__DietTrackingClient<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DietTracking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DietTrackingFindUniqueOrThrowArgs} args - Arguments to find a DietTracking
     * @example
     * // Get one DietTracking
     * const dietTracking = await prisma.dietTracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DietTrackingFindUniqueOrThrowArgs>(args: SelectSubset<T, DietTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DietTrackingClient<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DietTracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietTrackingFindFirstArgs} args - Arguments to find a DietTracking
     * @example
     * // Get one DietTracking
     * const dietTracking = await prisma.dietTracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DietTrackingFindFirstArgs>(args?: SelectSubset<T, DietTrackingFindFirstArgs<ExtArgs>>): Prisma__DietTrackingClient<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DietTracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietTrackingFindFirstOrThrowArgs} args - Arguments to find a DietTracking
     * @example
     * // Get one DietTracking
     * const dietTracking = await prisma.dietTracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DietTrackingFindFirstOrThrowArgs>(args?: SelectSubset<T, DietTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DietTrackingClient<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DietTrackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietTrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DietTrackings
     * const dietTrackings = await prisma.dietTracking.findMany()
     * 
     * // Get first 10 DietTrackings
     * const dietTrackings = await prisma.dietTracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dietTrackingWithIdOnly = await prisma.dietTracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DietTrackingFindManyArgs>(args?: SelectSubset<T, DietTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DietTracking.
     * @param {DietTrackingCreateArgs} args - Arguments to create a DietTracking.
     * @example
     * // Create one DietTracking
     * const DietTracking = await prisma.dietTracking.create({
     *   data: {
     *     // ... data to create a DietTracking
     *   }
     * })
     * 
     */
    create<T extends DietTrackingCreateArgs>(args: SelectSubset<T, DietTrackingCreateArgs<ExtArgs>>): Prisma__DietTrackingClient<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DietTrackings.
     * @param {DietTrackingCreateManyArgs} args - Arguments to create many DietTrackings.
     * @example
     * // Create many DietTrackings
     * const dietTracking = await prisma.dietTracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DietTrackingCreateManyArgs>(args?: SelectSubset<T, DietTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DietTrackings and returns the data saved in the database.
     * @param {DietTrackingCreateManyAndReturnArgs} args - Arguments to create many DietTrackings.
     * @example
     * // Create many DietTrackings
     * const dietTracking = await prisma.dietTracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DietTrackings and only return the `id`
     * const dietTrackingWithIdOnly = await prisma.dietTracking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DietTrackingCreateManyAndReturnArgs>(args?: SelectSubset<T, DietTrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DietTracking.
     * @param {DietTrackingDeleteArgs} args - Arguments to delete one DietTracking.
     * @example
     * // Delete one DietTracking
     * const DietTracking = await prisma.dietTracking.delete({
     *   where: {
     *     // ... filter to delete one DietTracking
     *   }
     * })
     * 
     */
    delete<T extends DietTrackingDeleteArgs>(args: SelectSubset<T, DietTrackingDeleteArgs<ExtArgs>>): Prisma__DietTrackingClient<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DietTracking.
     * @param {DietTrackingUpdateArgs} args - Arguments to update one DietTracking.
     * @example
     * // Update one DietTracking
     * const dietTracking = await prisma.dietTracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DietTrackingUpdateArgs>(args: SelectSubset<T, DietTrackingUpdateArgs<ExtArgs>>): Prisma__DietTrackingClient<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DietTrackings.
     * @param {DietTrackingDeleteManyArgs} args - Arguments to filter DietTrackings to delete.
     * @example
     * // Delete a few DietTrackings
     * const { count } = await prisma.dietTracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DietTrackingDeleteManyArgs>(args?: SelectSubset<T, DietTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DietTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietTrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DietTrackings
     * const dietTracking = await prisma.dietTracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DietTrackingUpdateManyArgs>(args: SelectSubset<T, DietTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DietTrackings and returns the data updated in the database.
     * @param {DietTrackingUpdateManyAndReturnArgs} args - Arguments to update many DietTrackings.
     * @example
     * // Update many DietTrackings
     * const dietTracking = await prisma.dietTracking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DietTrackings and only return the `id`
     * const dietTrackingWithIdOnly = await prisma.dietTracking.updateManyAndReturn({
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
    updateManyAndReturn<T extends DietTrackingUpdateManyAndReturnArgs>(args: SelectSubset<T, DietTrackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DietTracking.
     * @param {DietTrackingUpsertArgs} args - Arguments to update or create a DietTracking.
     * @example
     * // Update or create a DietTracking
     * const dietTracking = await prisma.dietTracking.upsert({
     *   create: {
     *     // ... data to create a DietTracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DietTracking we want to update
     *   }
     * })
     */
    upsert<T extends DietTrackingUpsertArgs>(args: SelectSubset<T, DietTrackingUpsertArgs<ExtArgs>>): Prisma__DietTrackingClient<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DietTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietTrackingCountArgs} args - Arguments to filter DietTrackings to count.
     * @example
     * // Count the number of DietTrackings
     * const count = await prisma.dietTracking.count({
     *   where: {
     *     // ... the filter for the DietTrackings we want to count
     *   }
     * })
    **/
    count<T extends DietTrackingCountArgs>(
      args?: Subset<T, DietTrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DietTrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DietTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietTrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DietTrackingAggregateArgs>(args: Subset<T, DietTrackingAggregateArgs>): Prisma.PrismaPromise<GetDietTrackingAggregateType<T>>

    /**
     * Group by DietTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietTrackingGroupByArgs} args - Group by arguments.
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
      T extends DietTrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DietTrackingGroupByArgs['orderBy'] }
        : { orderBy?: DietTrackingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DietTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDietTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DietTracking model
   */
  readonly fields: DietTrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DietTracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DietTrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meals<T extends DietTracking$mealsArgs<ExtArgs> = {}>(args?: Subset<T, DietTracking$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DietTracking model
   */
  interface DietTrackingFieldRefs {
    readonly id: FieldRef<"DietTracking", 'String'>
    readonly userId: FieldRef<"DietTracking", 'String'>
    readonly date: FieldRef<"DietTracking", 'DateTime'>
    readonly totalCalories: FieldRef<"DietTracking", 'Float'>
    readonly totalCarbs: FieldRef<"DietTracking", 'Float'>
    readonly totalProtein: FieldRef<"DietTracking", 'Float'>
    readonly totalFat: FieldRef<"DietTracking", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * DietTracking findUnique
   */
  export type DietTrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    /**
     * Filter, which DietTracking to fetch.
     */
    where: DietTrackingWhereUniqueInput
  }

  /**
   * DietTracking findUniqueOrThrow
   */
  export type DietTrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    /**
     * Filter, which DietTracking to fetch.
     */
    where: DietTrackingWhereUniqueInput
  }

  /**
   * DietTracking findFirst
   */
  export type DietTrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    /**
     * Filter, which DietTracking to fetch.
     */
    where?: DietTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietTrackings to fetch.
     */
    orderBy?: DietTrackingOrderByWithRelationInput | DietTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DietTrackings.
     */
    cursor?: DietTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DietTrackings.
     */
    distinct?: DietTrackingScalarFieldEnum | DietTrackingScalarFieldEnum[]
  }

  /**
   * DietTracking findFirstOrThrow
   */
  export type DietTrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    /**
     * Filter, which DietTracking to fetch.
     */
    where?: DietTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietTrackings to fetch.
     */
    orderBy?: DietTrackingOrderByWithRelationInput | DietTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DietTrackings.
     */
    cursor?: DietTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DietTrackings.
     */
    distinct?: DietTrackingScalarFieldEnum | DietTrackingScalarFieldEnum[]
  }

  /**
   * DietTracking findMany
   */
  export type DietTrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    /**
     * Filter, which DietTrackings to fetch.
     */
    where?: DietTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietTrackings to fetch.
     */
    orderBy?: DietTrackingOrderByWithRelationInput | DietTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DietTrackings.
     */
    cursor?: DietTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietTrackings.
     */
    skip?: number
    distinct?: DietTrackingScalarFieldEnum | DietTrackingScalarFieldEnum[]
  }

  /**
   * DietTracking create
   */
  export type DietTrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    /**
     * The data needed to create a DietTracking.
     */
    data: XOR<DietTrackingCreateInput, DietTrackingUncheckedCreateInput>
  }

  /**
   * DietTracking createMany
   */
  export type DietTrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DietTrackings.
     */
    data: DietTrackingCreateManyInput | DietTrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DietTracking createManyAndReturn
   */
  export type DietTrackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * The data used to create many DietTrackings.
     */
    data: DietTrackingCreateManyInput | DietTrackingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DietTracking update
   */
  export type DietTrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    /**
     * The data needed to update a DietTracking.
     */
    data: XOR<DietTrackingUpdateInput, DietTrackingUncheckedUpdateInput>
    /**
     * Choose, which DietTracking to update.
     */
    where: DietTrackingWhereUniqueInput
  }

  /**
   * DietTracking updateMany
   */
  export type DietTrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DietTrackings.
     */
    data: XOR<DietTrackingUpdateManyMutationInput, DietTrackingUncheckedUpdateManyInput>
    /**
     * Filter which DietTrackings to update
     */
    where?: DietTrackingWhereInput
    /**
     * Limit how many DietTrackings to update.
     */
    limit?: number
  }

  /**
   * DietTracking updateManyAndReturn
   */
  export type DietTrackingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * The data used to update DietTrackings.
     */
    data: XOR<DietTrackingUpdateManyMutationInput, DietTrackingUncheckedUpdateManyInput>
    /**
     * Filter which DietTrackings to update
     */
    where?: DietTrackingWhereInput
    /**
     * Limit how many DietTrackings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DietTracking upsert
   */
  export type DietTrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    /**
     * The filter to search for the DietTracking to update in case it exists.
     */
    where: DietTrackingWhereUniqueInput
    /**
     * In case the DietTracking found by the `where` argument doesn't exist, create a new DietTracking with this data.
     */
    create: XOR<DietTrackingCreateInput, DietTrackingUncheckedCreateInput>
    /**
     * In case the DietTracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DietTrackingUpdateInput, DietTrackingUncheckedUpdateInput>
  }

  /**
   * DietTracking delete
   */
  export type DietTrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    /**
     * Filter which DietTracking to delete.
     */
    where: DietTrackingWhereUniqueInput
  }

  /**
   * DietTracking deleteMany
   */
  export type DietTrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DietTrackings to delete
     */
    where?: DietTrackingWhereInput
    /**
     * Limit how many DietTrackings to delete.
     */
    limit?: number
  }

  /**
   * DietTracking.meals
   */
  export type DietTracking$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * DietTracking without action
   */
  export type DietTrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    calories: number | null
    carbs: number | null
    protein: number | null
    fat: number | null
  }

  export type MealSumAggregateOutputType = {
    calories: number | null
    carbs: number | null
    protein: number | null
    fat: number | null
  }

  export type MealMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dietTrackingId: string | null
    name: string | null
    category: $Enums.MealCategory | null
    calories: number | null
    carbs: number | null
    protein: number | null
    fat: number | null
    date: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dietTrackingId: string | null
    name: string | null
    category: $Enums.MealCategory | null
    calories: number | null
    carbs: number | null
    protein: number | null
    fat: number | null
    date: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    userId: number
    dietTrackingId: number
    name: number
    category: number
    calories: number
    carbs: number
    protein: number
    fat: number
    date: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    calories?: true
    carbs?: true
    protein?: true
    fat?: true
  }

  export type MealSumAggregateInputType = {
    calories?: true
    carbs?: true
    protein?: true
    fat?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    userId?: true
    dietTrackingId?: true
    name?: true
    category?: true
    calories?: true
    carbs?: true
    protein?: true
    fat?: true
    date?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    userId?: true
    dietTrackingId?: true
    name?: true
    category?: true
    calories?: true
    carbs?: true
    protein?: true
    fat?: true
    date?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    userId?: true
    dietTrackingId?: true
    name?: true
    category?: true
    calories?: true
    carbs?: true
    protein?: true
    fat?: true
    date?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: string
    userId: string
    dietTrackingId: string | null
    name: string
    category: $Enums.MealCategory
    calories: number
    carbs: number
    protein: number
    fat: number
    date: Date
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dietTrackingId?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    carbs?: boolean
    protein?: boolean
    fat?: boolean
    date?: boolean
    dietTracking?: boolean | Meal$dietTrackingArgs<ExtArgs>
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dietTrackingId?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    carbs?: boolean
    protein?: boolean
    fat?: boolean
    date?: boolean
    dietTracking?: boolean | Meal$dietTrackingArgs<ExtArgs>
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dietTrackingId?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    carbs?: boolean
    protein?: boolean
    fat?: boolean
    date?: boolean
    dietTracking?: boolean | Meal$dietTrackingArgs<ExtArgs>
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    userId?: boolean
    dietTrackingId?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    carbs?: boolean
    protein?: boolean
    fat?: boolean
    date?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dietTrackingId" | "name" | "category" | "calories" | "carbs" | "protein" | "fat" | "date", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dietTracking?: boolean | Meal$dietTrackingArgs<ExtArgs>
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dietTracking?: boolean | Meal$dietTrackingArgs<ExtArgs>
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dietTracking?: boolean | Meal$dietTrackingArgs<ExtArgs>
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      dietTracking: Prisma.$DietTrackingPayload<ExtArgs> | null
      user: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dietTrackingId: string | null
      name: string
      category: $Enums.MealCategory
      calories: number
      carbs: number
      protein: number
      fat: number
      date: Date
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dietTracking<T extends Meal$dietTrackingArgs<ExtArgs> = {}>(args?: Subset<T, Meal$dietTrackingArgs<ExtArgs>>): Prisma__DietTrackingClient<$Result.GetResult<Prisma.$DietTrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'String'>
    readonly userId: FieldRef<"Meal", 'String'>
    readonly dietTrackingId: FieldRef<"Meal", 'String'>
    readonly name: FieldRef<"Meal", 'String'>
    readonly category: FieldRef<"Meal", 'MealCategory'>
    readonly calories: FieldRef<"Meal", 'Float'>
    readonly carbs: FieldRef<"Meal", 'Float'>
    readonly protein: FieldRef<"Meal", 'Float'>
    readonly fat: FieldRef<"Meal", 'Float'>
    readonly date: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal.dietTracking
   */
  export type Meal$dietTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietTracking
     */
    select?: DietTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietTracking
     */
    omit?: DietTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietTrackingInclude<ExtArgs> | null
    where?: DietTrackingWhereInput
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model FoodItem
   */

  export type AggregateFoodItem = {
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  export type FoodItemAvgAggregateOutputType = {
    calories: number | null
    carbs: number | null
    protein: number | null
    fat: number | null
  }

  export type FoodItemSumAggregateOutputType = {
    calories: number | null
    carbs: number | null
    protein: number | null
    fat: number | null
  }

  export type FoodItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    calories: number | null
    carbs: number | null
    protein: number | null
    fat: number | null
    recipe: string | null
  }

  export type FoodItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    calories: number | null
    carbs: number | null
    protein: number | null
    fat: number | null
    recipe: string | null
  }

  export type FoodItemCountAggregateOutputType = {
    id: number
    name: number
    category: number
    calories: number
    carbs: number
    protein: number
    fat: number
    recipe: number
    _all: number
  }


  export type FoodItemAvgAggregateInputType = {
    calories?: true
    carbs?: true
    protein?: true
    fat?: true
  }

  export type FoodItemSumAggregateInputType = {
    calories?: true
    carbs?: true
    protein?: true
    fat?: true
  }

  export type FoodItemMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    calories?: true
    carbs?: true
    protein?: true
    fat?: true
    recipe?: true
  }

  export type FoodItemMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    calories?: true
    carbs?: true
    protein?: true
    fat?: true
    recipe?: true
  }

  export type FoodItemCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    calories?: true
    carbs?: true
    protein?: true
    fat?: true
    recipe?: true
    _all?: true
  }

  export type FoodItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItem to aggregate.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodItems
    **/
    _count?: true | FoodItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodItemMaxAggregateInputType
  }

  export type GetFoodItemAggregateType<T extends FoodItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodItem[P]>
      : GetScalarType<T[P], AggregateFoodItem[P]>
  }




  export type FoodItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodItemWhereInput
    orderBy?: FoodItemOrderByWithAggregationInput | FoodItemOrderByWithAggregationInput[]
    by: FoodItemScalarFieldEnum[] | FoodItemScalarFieldEnum
    having?: FoodItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodItemCountAggregateInputType | true
    _avg?: FoodItemAvgAggregateInputType
    _sum?: FoodItemSumAggregateInputType
    _min?: FoodItemMinAggregateInputType
    _max?: FoodItemMaxAggregateInputType
  }

  export type FoodItemGroupByOutputType = {
    id: string
    name: string
    category: string | null
    calories: number
    carbs: number
    protein: number
    fat: number
    recipe: string | null
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  type GetFoodItemGroupByPayload<T extends FoodItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
            : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
        }
      >
    >


  export type FoodItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    carbs?: boolean
    protein?: boolean
    fat?: boolean
    recipe?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    carbs?: boolean
    protein?: boolean
    fat?: boolean
    recipe?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    carbs?: boolean
    protein?: boolean
    fat?: boolean
    recipe?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    carbs?: boolean
    protein?: boolean
    fat?: boolean
    recipe?: boolean
  }

  export type FoodItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "calories" | "carbs" | "protein" | "fat" | "recipe", ExtArgs["result"]["foodItem"]>

  export type $FoodItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string | null
      calories: number
      carbs: number
      protein: number
      fat: number
      recipe: string | null
    }, ExtArgs["result"]["foodItem"]>
    composites: {}
  }

  type FoodItemGetPayload<S extends boolean | null | undefined | FoodItemDefaultArgs> = $Result.GetResult<Prisma.$FoodItemPayload, S>

  type FoodItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodItemCountAggregateInputType | true
    }

  export interface FoodItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodItem'], meta: { name: 'FoodItem' } }
    /**
     * Find zero or one FoodItem that matches the filter.
     * @param {FoodItemFindUniqueArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodItemFindUniqueArgs>(args: SelectSubset<T, FoodItemFindUniqueArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodItemFindUniqueOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodItemFindFirstArgs>(args?: SelectSubset<T, FoodItemFindFirstArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodItems
     * const foodItems = await prisma.foodItem.findMany()
     * 
     * // Get first 10 FoodItems
     * const foodItems = await prisma.foodItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodItemFindManyArgs>(args?: SelectSubset<T, FoodItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodItem.
     * @param {FoodItemCreateArgs} args - Arguments to create a FoodItem.
     * @example
     * // Create one FoodItem
     * const FoodItem = await prisma.foodItem.create({
     *   data: {
     *     // ... data to create a FoodItem
     *   }
     * })
     * 
     */
    create<T extends FoodItemCreateArgs>(args: SelectSubset<T, FoodItemCreateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodItems.
     * @param {FoodItemCreateManyArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodItemCreateManyArgs>(args?: SelectSubset<T, FoodItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodItems and returns the data saved in the database.
     * @param {FoodItemCreateManyAndReturnArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodItem.
     * @param {FoodItemDeleteArgs} args - Arguments to delete one FoodItem.
     * @example
     * // Delete one FoodItem
     * const FoodItem = await prisma.foodItem.delete({
     *   where: {
     *     // ... filter to delete one FoodItem
     *   }
     * })
     * 
     */
    delete<T extends FoodItemDeleteArgs>(args: SelectSubset<T, FoodItemDeleteArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodItem.
     * @param {FoodItemUpdateArgs} args - Arguments to update one FoodItem.
     * @example
     * // Update one FoodItem
     * const foodItem = await prisma.foodItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodItemUpdateArgs>(args: SelectSubset<T, FoodItemUpdateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodItems.
     * @param {FoodItemDeleteManyArgs} args - Arguments to filter FoodItems to delete.
     * @example
     * // Delete a few FoodItems
     * const { count } = await prisma.foodItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodItemDeleteManyArgs>(args?: SelectSubset<T, FoodItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodItemUpdateManyArgs>(args: SelectSubset<T, FoodItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems and returns the data updated in the database.
     * @param {FoodItemUpdateManyAndReturnArgs} args - Arguments to update many FoodItems.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends FoodItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodItem.
     * @param {FoodItemUpsertArgs} args - Arguments to update or create a FoodItem.
     * @example
     * // Update or create a FoodItem
     * const foodItem = await prisma.foodItem.upsert({
     *   create: {
     *     // ... data to create a FoodItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodItem we want to update
     *   }
     * })
     */
    upsert<T extends FoodItemUpsertArgs>(args: SelectSubset<T, FoodItemUpsertArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemCountArgs} args - Arguments to filter FoodItems to count.
     * @example
     * // Count the number of FoodItems
     * const count = await prisma.foodItem.count({
     *   where: {
     *     // ... the filter for the FoodItems we want to count
     *   }
     * })
    **/
    count<T extends FoodItemCountArgs>(
      args?: Subset<T, FoodItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodItemAggregateArgs>(args: Subset<T, FoodItemAggregateArgs>): Prisma.PrismaPromise<GetFoodItemAggregateType<T>>

    /**
     * Group by FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemGroupByArgs} args - Group by arguments.
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
      T extends FoodItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodItemGroupByArgs['orderBy'] }
        : { orderBy?: FoodItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodItem model
   */
  readonly fields: FoodItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FoodItem model
   */
  interface FoodItemFieldRefs {
    readonly id: FieldRef<"FoodItem", 'String'>
    readonly name: FieldRef<"FoodItem", 'String'>
    readonly category: FieldRef<"FoodItem", 'String'>
    readonly calories: FieldRef<"FoodItem", 'Float'>
    readonly carbs: FieldRef<"FoodItem", 'Float'>
    readonly protein: FieldRef<"FoodItem", 'Float'>
    readonly fat: FieldRef<"FoodItem", 'Float'>
    readonly recipe: FieldRef<"FoodItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FoodItem findUnique
   */
  export type FoodItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findUniqueOrThrow
   */
  export type FoodItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findFirst
   */
  export type FoodItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findFirstOrThrow
   */
  export type FoodItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findMany
   */
  export type FoodItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Filter, which FoodItems to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem create
   */
  export type FoodItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data needed to create a FoodItem.
     */
    data: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
  }

  /**
   * FoodItem createMany
   */
  export type FoodItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem createManyAndReturn
   */
  export type FoodItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem update
   */
  export type FoodItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data needed to update a FoodItem.
     */
    data: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
    /**
     * Choose, which FoodItem to update.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem updateMany
   */
  export type FoodItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem updateManyAndReturn
   */
  export type FoodItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem upsert
   */
  export type FoodItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The filter to search for the FoodItem to update in case it exists.
     */
    where: FoodItemWhereUniqueInput
    /**
     * In case the FoodItem found by the `where` argument doesn't exist, create a new FoodItem with this data.
     */
    create: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
    /**
     * In case the FoodItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
  }

  /**
   * FoodItem delete
   */
  export type FoodItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Filter which FoodItem to delete.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem deleteMany
   */
  export type FoodItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItems to delete
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to delete.
     */
    limit?: number
  }

  /**
   * FoodItem without action
   */
  export type FoodItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
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


  export const DietTrackingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    totalCalories: 'totalCalories',
    totalCarbs: 'totalCarbs',
    totalProtein: 'totalProtein',
    totalFat: 'totalFat'
  };

  export type DietTrackingScalarFieldEnum = (typeof DietTrackingScalarFieldEnum)[keyof typeof DietTrackingScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dietTrackingId: 'dietTrackingId',
    name: 'name',
    category: 'category',
    calories: 'calories',
    carbs: 'carbs',
    protein: 'protein',
    fat: 'fat',
    date: 'date'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const FoodItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    calories: 'calories',
    carbs: 'carbs',
    protein: 'protein',
    fat: 'fat',
    recipe: 'recipe'
  };

  export type FoodItemScalarFieldEnum = (typeof FoodItemScalarFieldEnum)[keyof typeof FoodItemScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'MealCategory'
   */
  export type EnumMealCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealCategory'>
    


  /**
   * Reference to a field of type 'MealCategory[]'
   */
  export type ListEnumMealCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealCategory[]'>
    


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
    meals?: MealListRelationFilter
    dietTracking?: DietTrackingListRelationFilter
    monitorings?: DailyMonitoringListRelationFilter
  }

  export type UserProfileOrderByWithRelationInput = {
    userId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    meals?: MealOrderByRelationAggregateInput
    dietTracking?: DietTrackingOrderByRelationAggregateInput
    monitorings?: DailyMonitoringOrderByRelationAggregateInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    height?: FloatFilter<"UserProfile"> | number
    weight?: FloatFilter<"UserProfile"> | number
    meals?: MealListRelationFilter
    dietTracking?: DietTrackingListRelationFilter
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

  export type DietTrackingWhereInput = {
    AND?: DietTrackingWhereInput | DietTrackingWhereInput[]
    OR?: DietTrackingWhereInput[]
    NOT?: DietTrackingWhereInput | DietTrackingWhereInput[]
    id?: StringFilter<"DietTracking"> | string
    userId?: StringFilter<"DietTracking"> | string
    date?: DateTimeFilter<"DietTracking"> | Date | string
    totalCalories?: FloatFilter<"DietTracking"> | number
    totalCarbs?: FloatFilter<"DietTracking"> | number
    totalProtein?: FloatFilter<"DietTracking"> | number
    totalFat?: FloatFilter<"DietTracking"> | number
    meals?: MealListRelationFilter
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type DietTrackingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalCalories?: SortOrder
    totalCarbs?: SortOrder
    totalProtein?: SortOrder
    totalFat?: SortOrder
    meals?: MealOrderByRelationAggregateInput
    user?: UserProfileOrderByWithRelationInput
  }

  export type DietTrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DietTrackingUserIdDateCompoundUniqueInput
    AND?: DietTrackingWhereInput | DietTrackingWhereInput[]
    OR?: DietTrackingWhereInput[]
    NOT?: DietTrackingWhereInput | DietTrackingWhereInput[]
    userId?: StringFilter<"DietTracking"> | string
    date?: DateTimeFilter<"DietTracking"> | Date | string
    totalCalories?: FloatFilter<"DietTracking"> | number
    totalCarbs?: FloatFilter<"DietTracking"> | number
    totalProtein?: FloatFilter<"DietTracking"> | number
    totalFat?: FloatFilter<"DietTracking"> | number
    meals?: MealListRelationFilter
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id" | "userId_date">

  export type DietTrackingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalCalories?: SortOrder
    totalCarbs?: SortOrder
    totalProtein?: SortOrder
    totalFat?: SortOrder
    _count?: DietTrackingCountOrderByAggregateInput
    _avg?: DietTrackingAvgOrderByAggregateInput
    _max?: DietTrackingMaxOrderByAggregateInput
    _min?: DietTrackingMinOrderByAggregateInput
    _sum?: DietTrackingSumOrderByAggregateInput
  }

  export type DietTrackingScalarWhereWithAggregatesInput = {
    AND?: DietTrackingScalarWhereWithAggregatesInput | DietTrackingScalarWhereWithAggregatesInput[]
    OR?: DietTrackingScalarWhereWithAggregatesInput[]
    NOT?: DietTrackingScalarWhereWithAggregatesInput | DietTrackingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DietTracking"> | string
    userId?: StringWithAggregatesFilter<"DietTracking"> | string
    date?: DateTimeWithAggregatesFilter<"DietTracking"> | Date | string
    totalCalories?: FloatWithAggregatesFilter<"DietTracking"> | number
    totalCarbs?: FloatWithAggregatesFilter<"DietTracking"> | number
    totalProtein?: FloatWithAggregatesFilter<"DietTracking"> | number
    totalFat?: FloatWithAggregatesFilter<"DietTracking"> | number
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: StringFilter<"Meal"> | string
    userId?: StringFilter<"Meal"> | string
    dietTrackingId?: StringNullableFilter<"Meal"> | string | null
    name?: StringFilter<"Meal"> | string
    category?: EnumMealCategoryFilter<"Meal"> | $Enums.MealCategory
    calories?: FloatFilter<"Meal"> | number
    carbs?: FloatFilter<"Meal"> | number
    protein?: FloatFilter<"Meal"> | number
    fat?: FloatFilter<"Meal"> | number
    date?: DateTimeFilter<"Meal"> | Date | string
    dietTracking?: XOR<DietTrackingNullableScalarRelationFilter, DietTrackingWhereInput> | null
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dietTrackingId?: SortOrderInput | SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    date?: SortOrder
    dietTracking?: DietTrackingOrderByWithRelationInput
    user?: UserProfileOrderByWithRelationInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    userId?: StringFilter<"Meal"> | string
    dietTrackingId?: StringNullableFilter<"Meal"> | string | null
    name?: StringFilter<"Meal"> | string
    category?: EnumMealCategoryFilter<"Meal"> | $Enums.MealCategory
    calories?: FloatFilter<"Meal"> | number
    carbs?: FloatFilter<"Meal"> | number
    protein?: FloatFilter<"Meal"> | number
    fat?: FloatFilter<"Meal"> | number
    date?: DateTimeFilter<"Meal"> | Date | string
    dietTracking?: XOR<DietTrackingNullableScalarRelationFilter, DietTrackingWhereInput> | null
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dietTrackingId?: SortOrderInput | SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    date?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meal"> | string
    userId?: StringWithAggregatesFilter<"Meal"> | string
    dietTrackingId?: StringNullableWithAggregatesFilter<"Meal"> | string | null
    name?: StringWithAggregatesFilter<"Meal"> | string
    category?: EnumMealCategoryWithAggregatesFilter<"Meal"> | $Enums.MealCategory
    calories?: FloatWithAggregatesFilter<"Meal"> | number
    carbs?: FloatWithAggregatesFilter<"Meal"> | number
    protein?: FloatWithAggregatesFilter<"Meal"> | number
    fat?: FloatWithAggregatesFilter<"Meal"> | number
    date?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
  }

  export type FoodItemWhereInput = {
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    id?: StringFilter<"FoodItem"> | string
    name?: StringFilter<"FoodItem"> | string
    category?: StringNullableFilter<"FoodItem"> | string | null
    calories?: FloatFilter<"FoodItem"> | number
    carbs?: FloatFilter<"FoodItem"> | number
    protein?: FloatFilter<"FoodItem"> | number
    fat?: FloatFilter<"FoodItem"> | number
    recipe?: StringNullableFilter<"FoodItem"> | string | null
  }

  export type FoodItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    recipe?: SortOrderInput | SortOrder
  }

  export type FoodItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    name?: StringFilter<"FoodItem"> | string
    category?: StringNullableFilter<"FoodItem"> | string | null
    calories?: FloatFilter<"FoodItem"> | number
    carbs?: FloatFilter<"FoodItem"> | number
    protein?: FloatFilter<"FoodItem"> | number
    fat?: FloatFilter<"FoodItem"> | number
    recipe?: StringNullableFilter<"FoodItem"> | string | null
  }, "id">

  export type FoodItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    recipe?: SortOrderInput | SortOrder
    _count?: FoodItemCountOrderByAggregateInput
    _avg?: FoodItemAvgOrderByAggregateInput
    _max?: FoodItemMaxOrderByAggregateInput
    _min?: FoodItemMinOrderByAggregateInput
    _sum?: FoodItemSumOrderByAggregateInput
  }

  export type FoodItemScalarWhereWithAggregatesInput = {
    AND?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    OR?: FoodItemScalarWhereWithAggregatesInput[]
    NOT?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodItem"> | string
    name?: StringWithAggregatesFilter<"FoodItem"> | string
    category?: StringNullableWithAggregatesFilter<"FoodItem"> | string | null
    calories?: FloatWithAggregatesFilter<"FoodItem"> | number
    carbs?: FloatWithAggregatesFilter<"FoodItem"> | number
    protein?: FloatWithAggregatesFilter<"FoodItem"> | number
    fat?: FloatWithAggregatesFilter<"FoodItem"> | number
    recipe?: StringNullableWithAggregatesFilter<"FoodItem"> | string | null
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
    meals?: MealCreateNestedManyWithoutUserInput
    dietTracking?: DietTrackingCreateNestedManyWithoutUserInput
    monitorings?: DailyMonitoringCreateNestedManyWithoutUserInput
  }

  export type UserProfileUncheckedCreateInput = {
    userId: string
    height: number
    weight: number
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    dietTracking?: DietTrackingUncheckedCreateNestedManyWithoutUserInput
    monitorings?: DailyMonitoringUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserProfileUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    meals?: MealUpdateManyWithoutUserNestedInput
    dietTracking?: DietTrackingUpdateManyWithoutUserNestedInput
    monitorings?: DailyMonitoringUpdateManyWithoutUserNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    dietTracking?: DietTrackingUncheckedUpdateManyWithoutUserNestedInput
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

  export type DietTrackingCreateInput = {
    id?: string
    date: Date | string
    totalCalories?: number
    totalCarbs?: number
    totalProtein?: number
    totalFat?: number
    meals?: MealCreateNestedManyWithoutDietTrackingInput
    user: UserProfileCreateNestedOneWithoutDietTrackingInput
  }

  export type DietTrackingUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    totalCalories?: number
    totalCarbs?: number
    totalProtein?: number
    totalFat?: number
    meals?: MealUncheckedCreateNestedManyWithoutDietTrackingInput
  }

  export type DietTrackingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
    meals?: MealUpdateManyWithoutDietTrackingNestedInput
    user?: UserProfileUpdateOneRequiredWithoutDietTrackingNestedInput
  }

  export type DietTrackingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutDietTrackingNestedInput
  }

  export type DietTrackingCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    totalCalories?: number
    totalCarbs?: number
    totalProtein?: number
    totalFat?: number
  }

  export type DietTrackingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
  }

  export type DietTrackingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
  }

  export type MealCreateInput = {
    id?: string
    name: string
    category: $Enums.MealCategory
    calories: number
    carbs: number
    protein: number
    fat: number
    date: Date | string
    dietTracking?: DietTrackingCreateNestedOneWithoutMealsInput
    user: UserProfileCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateInput = {
    id?: string
    userId: string
    dietTrackingId?: string | null
    name: string
    category: $Enums.MealCategory
    calories: number
    carbs: number
    protein: number
    fat: number
    date: Date | string
  }

  export type MealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMealCategoryFieldUpdateOperationsInput | $Enums.MealCategory
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dietTracking?: DietTrackingUpdateOneWithoutMealsNestedInput
    user?: UserProfileUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dietTrackingId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMealCategoryFieldUpdateOperationsInput | $Enums.MealCategory
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateManyInput = {
    id?: string
    userId: string
    dietTrackingId?: string | null
    name: string
    category: $Enums.MealCategory
    calories: number
    carbs: number
    protein: number
    fat: number
    date: Date | string
  }

  export type MealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMealCategoryFieldUpdateOperationsInput | $Enums.MealCategory
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dietTrackingId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMealCategoryFieldUpdateOperationsInput | $Enums.MealCategory
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemCreateInput = {
    id?: string
    name: string
    category?: string | null
    calories: number
    carbs: number
    protein: number
    fat: number
    recipe?: string | null
  }

  export type FoodItemUncheckedCreateInput = {
    id?: string
    name: string
    category?: string | null
    calories: number
    carbs: number
    protein: number
    fat: number
    recipe?: string | null
  }

  export type FoodItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    recipe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FoodItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    recipe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FoodItemCreateManyInput = {
    id?: string
    name: string
    category?: string | null
    calories: number
    carbs: number
    protein: number
    fat: number
    recipe?: string | null
  }

  export type FoodItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    recipe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FoodItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    recipe?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type DietTrackingListRelationFilter = {
    every?: DietTrackingWhereInput
    some?: DietTrackingWhereInput
    none?: DietTrackingWhereInput
  }

  export type DailyMonitoringListRelationFilter = {
    every?: DailyMonitoringWhereInput
    some?: DailyMonitoringWhereInput
    none?: DailyMonitoringWhereInput
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DietTrackingOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type DietTrackingUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type DietTrackingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalCalories?: SortOrder
    totalCarbs?: SortOrder
    totalProtein?: SortOrder
    totalFat?: SortOrder
  }

  export type DietTrackingAvgOrderByAggregateInput = {
    totalCalories?: SortOrder
    totalCarbs?: SortOrder
    totalProtein?: SortOrder
    totalFat?: SortOrder
  }

  export type DietTrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalCalories?: SortOrder
    totalCarbs?: SortOrder
    totalProtein?: SortOrder
    totalFat?: SortOrder
  }

  export type DietTrackingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalCalories?: SortOrder
    totalCarbs?: SortOrder
    totalProtein?: SortOrder
    totalFat?: SortOrder
  }

  export type DietTrackingSumOrderByAggregateInput = {
    totalCalories?: SortOrder
    totalCarbs?: SortOrder
    totalProtein?: SortOrder
    totalFat?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumMealCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.MealCategory | EnumMealCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MealCategory[] | ListEnumMealCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealCategory[] | ListEnumMealCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMealCategoryFilter<$PrismaModel> | $Enums.MealCategory
  }

  export type DietTrackingNullableScalarRelationFilter = {
    is?: DietTrackingWhereInput | null
    isNot?: DietTrackingWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dietTrackingId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    date?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dietTrackingId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    date?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dietTrackingId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    date?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumMealCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealCategory | EnumMealCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MealCategory[] | ListEnumMealCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealCategory[] | ListEnumMealCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMealCategoryWithAggregatesFilter<$PrismaModel> | $Enums.MealCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealCategoryFilter<$PrismaModel>
    _max?: NestedEnumMealCategoryFilter<$PrismaModel>
  }

  export type FoodItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    recipe?: SortOrder
  }

  export type FoodItemAvgOrderByAggregateInput = {
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
  }

  export type FoodItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    recipe?: SortOrder
  }

  export type FoodItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    recipe?: SortOrder
  }

  export type FoodItemSumOrderByAggregateInput = {
    calories?: SortOrder
    carbs?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
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

  export type MealCreateNestedManyWithoutUserInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type DietTrackingCreateNestedManyWithoutUserInput = {
    create?: XOR<DietTrackingCreateWithoutUserInput, DietTrackingUncheckedCreateWithoutUserInput> | DietTrackingCreateWithoutUserInput[] | DietTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DietTrackingCreateOrConnectWithoutUserInput | DietTrackingCreateOrConnectWithoutUserInput[]
    createMany?: DietTrackingCreateManyUserInputEnvelope
    connect?: DietTrackingWhereUniqueInput | DietTrackingWhereUniqueInput[]
  }

  export type DailyMonitoringCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyMonitoringCreateWithoutUserInput, DailyMonitoringUncheckedCreateWithoutUserInput> | DailyMonitoringCreateWithoutUserInput[] | DailyMonitoringUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyMonitoringCreateOrConnectWithoutUserInput | DailyMonitoringCreateOrConnectWithoutUserInput[]
    createMany?: DailyMonitoringCreateManyUserInputEnvelope
    connect?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type DietTrackingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DietTrackingCreateWithoutUserInput, DietTrackingUncheckedCreateWithoutUserInput> | DietTrackingCreateWithoutUserInput[] | DietTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DietTrackingCreateOrConnectWithoutUserInput | DietTrackingCreateOrConnectWithoutUserInput[]
    createMany?: DietTrackingCreateManyUserInputEnvelope
    connect?: DietTrackingWhereUniqueInput | DietTrackingWhereUniqueInput[]
  }

  export type DailyMonitoringUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyMonitoringCreateWithoutUserInput, DailyMonitoringUncheckedCreateWithoutUserInput> | DailyMonitoringCreateWithoutUserInput[] | DailyMonitoringUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyMonitoringCreateOrConnectWithoutUserInput | DailyMonitoringCreateOrConnectWithoutUserInput[]
    createMany?: DailyMonitoringCreateManyUserInputEnvelope
    connect?: DailyMonitoringWhereUniqueInput | DailyMonitoringWhereUniqueInput[]
  }

  export type MealUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutUserInput | MealUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutUserInput | MealUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealUpdateManyWithWhereWithoutUserInput | MealUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type DietTrackingUpdateManyWithoutUserNestedInput = {
    create?: XOR<DietTrackingCreateWithoutUserInput, DietTrackingUncheckedCreateWithoutUserInput> | DietTrackingCreateWithoutUserInput[] | DietTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DietTrackingCreateOrConnectWithoutUserInput | DietTrackingCreateOrConnectWithoutUserInput[]
    upsert?: DietTrackingUpsertWithWhereUniqueWithoutUserInput | DietTrackingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DietTrackingCreateManyUserInputEnvelope
    set?: DietTrackingWhereUniqueInput | DietTrackingWhereUniqueInput[]
    disconnect?: DietTrackingWhereUniqueInput | DietTrackingWhereUniqueInput[]
    delete?: DietTrackingWhereUniqueInput | DietTrackingWhereUniqueInput[]
    connect?: DietTrackingWhereUniqueInput | DietTrackingWhereUniqueInput[]
    update?: DietTrackingUpdateWithWhereUniqueWithoutUserInput | DietTrackingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DietTrackingUpdateManyWithWhereWithoutUserInput | DietTrackingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DietTrackingScalarWhereInput | DietTrackingScalarWhereInput[]
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

  export type MealUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutUserInput | MealUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutUserInput | MealUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealUpdateManyWithWhereWithoutUserInput | MealUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type DietTrackingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DietTrackingCreateWithoutUserInput, DietTrackingUncheckedCreateWithoutUserInput> | DietTrackingCreateWithoutUserInput[] | DietTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DietTrackingCreateOrConnectWithoutUserInput | DietTrackingCreateOrConnectWithoutUserInput[]
    upsert?: DietTrackingUpsertWithWhereUniqueWithoutUserInput | DietTrackingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DietTrackingCreateManyUserInputEnvelope
    set?: DietTrackingWhereUniqueInput | DietTrackingWhereUniqueInput[]
    disconnect?: DietTrackingWhereUniqueInput | DietTrackingWhereUniqueInput[]
    delete?: DietTrackingWhereUniqueInput | DietTrackingWhereUniqueInput[]
    connect?: DietTrackingWhereUniqueInput | DietTrackingWhereUniqueInput[]
    update?: DietTrackingUpdateWithWhereUniqueWithoutUserInput | DietTrackingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DietTrackingUpdateManyWithWhereWithoutUserInput | DietTrackingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DietTrackingScalarWhereInput | DietTrackingScalarWhereInput[]
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

  export type MealCreateNestedManyWithoutDietTrackingInput = {
    create?: XOR<MealCreateWithoutDietTrackingInput, MealUncheckedCreateWithoutDietTrackingInput> | MealCreateWithoutDietTrackingInput[] | MealUncheckedCreateWithoutDietTrackingInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDietTrackingInput | MealCreateOrConnectWithoutDietTrackingInput[]
    createMany?: MealCreateManyDietTrackingInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type UserProfileCreateNestedOneWithoutDietTrackingInput = {
    create?: XOR<UserProfileCreateWithoutDietTrackingInput, UserProfileUncheckedCreateWithoutDietTrackingInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutDietTrackingInput
    connect?: UserProfileWhereUniqueInput
  }

  export type MealUncheckedCreateNestedManyWithoutDietTrackingInput = {
    create?: XOR<MealCreateWithoutDietTrackingInput, MealUncheckedCreateWithoutDietTrackingInput> | MealCreateWithoutDietTrackingInput[] | MealUncheckedCreateWithoutDietTrackingInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDietTrackingInput | MealCreateOrConnectWithoutDietTrackingInput[]
    createMany?: MealCreateManyDietTrackingInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type MealUpdateManyWithoutDietTrackingNestedInput = {
    create?: XOR<MealCreateWithoutDietTrackingInput, MealUncheckedCreateWithoutDietTrackingInput> | MealCreateWithoutDietTrackingInput[] | MealUncheckedCreateWithoutDietTrackingInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDietTrackingInput | MealCreateOrConnectWithoutDietTrackingInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutDietTrackingInput | MealUpsertWithWhereUniqueWithoutDietTrackingInput[]
    createMany?: MealCreateManyDietTrackingInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutDietTrackingInput | MealUpdateWithWhereUniqueWithoutDietTrackingInput[]
    updateMany?: MealUpdateManyWithWhereWithoutDietTrackingInput | MealUpdateManyWithWhereWithoutDietTrackingInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type UserProfileUpdateOneRequiredWithoutDietTrackingNestedInput = {
    create?: XOR<UserProfileCreateWithoutDietTrackingInput, UserProfileUncheckedCreateWithoutDietTrackingInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutDietTrackingInput
    upsert?: UserProfileUpsertWithoutDietTrackingInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutDietTrackingInput, UserProfileUpdateWithoutDietTrackingInput>, UserProfileUncheckedUpdateWithoutDietTrackingInput>
  }

  export type MealUncheckedUpdateManyWithoutDietTrackingNestedInput = {
    create?: XOR<MealCreateWithoutDietTrackingInput, MealUncheckedCreateWithoutDietTrackingInput> | MealCreateWithoutDietTrackingInput[] | MealUncheckedCreateWithoutDietTrackingInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDietTrackingInput | MealCreateOrConnectWithoutDietTrackingInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutDietTrackingInput | MealUpsertWithWhereUniqueWithoutDietTrackingInput[]
    createMany?: MealCreateManyDietTrackingInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutDietTrackingInput | MealUpdateWithWhereUniqueWithoutDietTrackingInput[]
    updateMany?: MealUpdateManyWithWhereWithoutDietTrackingInput | MealUpdateManyWithWhereWithoutDietTrackingInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type DietTrackingCreateNestedOneWithoutMealsInput = {
    create?: XOR<DietTrackingCreateWithoutMealsInput, DietTrackingUncheckedCreateWithoutMealsInput>
    connectOrCreate?: DietTrackingCreateOrConnectWithoutMealsInput
    connect?: DietTrackingWhereUniqueInput
  }

  export type UserProfileCreateNestedOneWithoutMealsInput = {
    create?: XOR<UserProfileCreateWithoutMealsInput, UserProfileUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutMealsInput
    connect?: UserProfileWhereUniqueInput
  }

  export type EnumMealCategoryFieldUpdateOperationsInput = {
    set?: $Enums.MealCategory
  }

  export type DietTrackingUpdateOneWithoutMealsNestedInput = {
    create?: XOR<DietTrackingCreateWithoutMealsInput, DietTrackingUncheckedCreateWithoutMealsInput>
    connectOrCreate?: DietTrackingCreateOrConnectWithoutMealsInput
    upsert?: DietTrackingUpsertWithoutMealsInput
    disconnect?: DietTrackingWhereInput | boolean
    delete?: DietTrackingWhereInput | boolean
    connect?: DietTrackingWhereUniqueInput
    update?: XOR<XOR<DietTrackingUpdateToOneWithWhereWithoutMealsInput, DietTrackingUpdateWithoutMealsInput>, DietTrackingUncheckedUpdateWithoutMealsInput>
  }

  export type UserProfileUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<UserProfileCreateWithoutMealsInput, UserProfileUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutMealsInput
    upsert?: UserProfileUpsertWithoutMealsInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutMealsInput, UserProfileUpdateWithoutMealsInput>, UserProfileUncheckedUpdateWithoutMealsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumMealCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.MealCategory | EnumMealCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MealCategory[] | ListEnumMealCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealCategory[] | ListEnumMealCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMealCategoryFilter<$PrismaModel> | $Enums.MealCategory
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMealCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealCategory | EnumMealCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MealCategory[] | ListEnumMealCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealCategory[] | ListEnumMealCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMealCategoryWithAggregatesFilter<$PrismaModel> | $Enums.MealCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealCategoryFilter<$PrismaModel>
    _max?: NestedEnumMealCategoryFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutMonitoringsInput = {
    userId: string
    height: number
    weight: number
    meals?: MealCreateNestedManyWithoutUserInput
    dietTracking?: DietTrackingCreateNestedManyWithoutUserInput
  }

  export type UserProfileUncheckedCreateWithoutMonitoringsInput = {
    userId: string
    height: number
    weight: number
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    dietTracking?: DietTrackingUncheckedCreateNestedManyWithoutUserInput
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
    meals?: MealUpdateManyWithoutUserNestedInput
    dietTracking?: DietTrackingUpdateManyWithoutUserNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutMonitoringsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    dietTracking?: DietTrackingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealCreateWithoutUserInput = {
    id?: string
    name: string
    category: $Enums.MealCategory
    calories: number
    carbs: number
    protein: number
    fat: number
    date: Date | string
    dietTracking?: DietTrackingCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutUserInput = {
    id?: string
    dietTrackingId?: string | null
    name: string
    category: $Enums.MealCategory
    calories: number
    carbs: number
    protein: number
    fat: number
    date: Date | string
  }

  export type MealCreateOrConnectWithoutUserInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput>
  }

  export type MealCreateManyUserInputEnvelope = {
    data: MealCreateManyUserInput | MealCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DietTrackingCreateWithoutUserInput = {
    id?: string
    date: Date | string
    totalCalories?: number
    totalCarbs?: number
    totalProtein?: number
    totalFat?: number
    meals?: MealCreateNestedManyWithoutDietTrackingInput
  }

  export type DietTrackingUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    totalCalories?: number
    totalCarbs?: number
    totalProtein?: number
    totalFat?: number
    meals?: MealUncheckedCreateNestedManyWithoutDietTrackingInput
  }

  export type DietTrackingCreateOrConnectWithoutUserInput = {
    where: DietTrackingWhereUniqueInput
    create: XOR<DietTrackingCreateWithoutUserInput, DietTrackingUncheckedCreateWithoutUserInput>
  }

  export type DietTrackingCreateManyUserInputEnvelope = {
    data: DietTrackingCreateManyUserInput | DietTrackingCreateManyUserInput[]
    skipDuplicates?: boolean
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

  export type MealUpsertWithWhereUniqueWithoutUserInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutUserInput, MealUncheckedUpdateWithoutUserInput>
    create: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput>
  }

  export type MealUpdateWithWhereUniqueWithoutUserInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutUserInput, MealUncheckedUpdateWithoutUserInput>
  }

  export type MealUpdateManyWithWhereWithoutUserInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutUserInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: StringFilter<"Meal"> | string
    userId?: StringFilter<"Meal"> | string
    dietTrackingId?: StringNullableFilter<"Meal"> | string | null
    name?: StringFilter<"Meal"> | string
    category?: EnumMealCategoryFilter<"Meal"> | $Enums.MealCategory
    calories?: FloatFilter<"Meal"> | number
    carbs?: FloatFilter<"Meal"> | number
    protein?: FloatFilter<"Meal"> | number
    fat?: FloatFilter<"Meal"> | number
    date?: DateTimeFilter<"Meal"> | Date | string
  }

  export type DietTrackingUpsertWithWhereUniqueWithoutUserInput = {
    where: DietTrackingWhereUniqueInput
    update: XOR<DietTrackingUpdateWithoutUserInput, DietTrackingUncheckedUpdateWithoutUserInput>
    create: XOR<DietTrackingCreateWithoutUserInput, DietTrackingUncheckedCreateWithoutUserInput>
  }

  export type DietTrackingUpdateWithWhereUniqueWithoutUserInput = {
    where: DietTrackingWhereUniqueInput
    data: XOR<DietTrackingUpdateWithoutUserInput, DietTrackingUncheckedUpdateWithoutUserInput>
  }

  export type DietTrackingUpdateManyWithWhereWithoutUserInput = {
    where: DietTrackingScalarWhereInput
    data: XOR<DietTrackingUpdateManyMutationInput, DietTrackingUncheckedUpdateManyWithoutUserInput>
  }

  export type DietTrackingScalarWhereInput = {
    AND?: DietTrackingScalarWhereInput | DietTrackingScalarWhereInput[]
    OR?: DietTrackingScalarWhereInput[]
    NOT?: DietTrackingScalarWhereInput | DietTrackingScalarWhereInput[]
    id?: StringFilter<"DietTracking"> | string
    userId?: StringFilter<"DietTracking"> | string
    date?: DateTimeFilter<"DietTracking"> | Date | string
    totalCalories?: FloatFilter<"DietTracking"> | number
    totalCarbs?: FloatFilter<"DietTracking"> | number
    totalProtein?: FloatFilter<"DietTracking"> | number
    totalFat?: FloatFilter<"DietTracking"> | number
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

  export type MealCreateWithoutDietTrackingInput = {
    id?: string
    name: string
    category: $Enums.MealCategory
    calories: number
    carbs: number
    protein: number
    fat: number
    date: Date | string
    user: UserProfileCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutDietTrackingInput = {
    id?: string
    userId: string
    name: string
    category: $Enums.MealCategory
    calories: number
    carbs: number
    protein: number
    fat: number
    date: Date | string
  }

  export type MealCreateOrConnectWithoutDietTrackingInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutDietTrackingInput, MealUncheckedCreateWithoutDietTrackingInput>
  }

  export type MealCreateManyDietTrackingInputEnvelope = {
    data: MealCreateManyDietTrackingInput | MealCreateManyDietTrackingInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileCreateWithoutDietTrackingInput = {
    userId: string
    height: number
    weight: number
    meals?: MealCreateNestedManyWithoutUserInput
    monitorings?: DailyMonitoringCreateNestedManyWithoutUserInput
  }

  export type UserProfileUncheckedCreateWithoutDietTrackingInput = {
    userId: string
    height: number
    weight: number
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    monitorings?: DailyMonitoringUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserProfileCreateOrConnectWithoutDietTrackingInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutDietTrackingInput, UserProfileUncheckedCreateWithoutDietTrackingInput>
  }

  export type MealUpsertWithWhereUniqueWithoutDietTrackingInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutDietTrackingInput, MealUncheckedUpdateWithoutDietTrackingInput>
    create: XOR<MealCreateWithoutDietTrackingInput, MealUncheckedCreateWithoutDietTrackingInput>
  }

  export type MealUpdateWithWhereUniqueWithoutDietTrackingInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutDietTrackingInput, MealUncheckedUpdateWithoutDietTrackingInput>
  }

  export type MealUpdateManyWithWhereWithoutDietTrackingInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutDietTrackingInput>
  }

  export type UserProfileUpsertWithoutDietTrackingInput = {
    update: XOR<UserProfileUpdateWithoutDietTrackingInput, UserProfileUncheckedUpdateWithoutDietTrackingInput>
    create: XOR<UserProfileCreateWithoutDietTrackingInput, UserProfileUncheckedCreateWithoutDietTrackingInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutDietTrackingInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutDietTrackingInput, UserProfileUncheckedUpdateWithoutDietTrackingInput>
  }

  export type UserProfileUpdateWithoutDietTrackingInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    meals?: MealUpdateManyWithoutUserNestedInput
    monitorings?: DailyMonitoringUpdateManyWithoutUserNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutDietTrackingInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    monitorings?: DailyMonitoringUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DietTrackingCreateWithoutMealsInput = {
    id?: string
    date: Date | string
    totalCalories?: number
    totalCarbs?: number
    totalProtein?: number
    totalFat?: number
    user: UserProfileCreateNestedOneWithoutDietTrackingInput
  }

  export type DietTrackingUncheckedCreateWithoutMealsInput = {
    id?: string
    userId: string
    date: Date | string
    totalCalories?: number
    totalCarbs?: number
    totalProtein?: number
    totalFat?: number
  }

  export type DietTrackingCreateOrConnectWithoutMealsInput = {
    where: DietTrackingWhereUniqueInput
    create: XOR<DietTrackingCreateWithoutMealsInput, DietTrackingUncheckedCreateWithoutMealsInput>
  }

  export type UserProfileCreateWithoutMealsInput = {
    userId: string
    height: number
    weight: number
    dietTracking?: DietTrackingCreateNestedManyWithoutUserInput
    monitorings?: DailyMonitoringCreateNestedManyWithoutUserInput
  }

  export type UserProfileUncheckedCreateWithoutMealsInput = {
    userId: string
    height: number
    weight: number
    dietTracking?: DietTrackingUncheckedCreateNestedManyWithoutUserInput
    monitorings?: DailyMonitoringUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserProfileCreateOrConnectWithoutMealsInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutMealsInput, UserProfileUncheckedCreateWithoutMealsInput>
  }

  export type DietTrackingUpsertWithoutMealsInput = {
    update: XOR<DietTrackingUpdateWithoutMealsInput, DietTrackingUncheckedUpdateWithoutMealsInput>
    create: XOR<DietTrackingCreateWithoutMealsInput, DietTrackingUncheckedCreateWithoutMealsInput>
    where?: DietTrackingWhereInput
  }

  export type DietTrackingUpdateToOneWithWhereWithoutMealsInput = {
    where?: DietTrackingWhereInput
    data: XOR<DietTrackingUpdateWithoutMealsInput, DietTrackingUncheckedUpdateWithoutMealsInput>
  }

  export type DietTrackingUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
    user?: UserProfileUpdateOneRequiredWithoutDietTrackingNestedInput
  }

  export type DietTrackingUncheckedUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileUpsertWithoutMealsInput = {
    update: XOR<UserProfileUpdateWithoutMealsInput, UserProfileUncheckedUpdateWithoutMealsInput>
    create: XOR<UserProfileCreateWithoutMealsInput, UserProfileUncheckedCreateWithoutMealsInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutMealsInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutMealsInput, UserProfileUncheckedUpdateWithoutMealsInput>
  }

  export type UserProfileUpdateWithoutMealsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    dietTracking?: DietTrackingUpdateManyWithoutUserNestedInput
    monitorings?: DailyMonitoringUpdateManyWithoutUserNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutMealsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    dietTracking?: DietTrackingUncheckedUpdateManyWithoutUserNestedInput
    monitorings?: DailyMonitoringUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealCreateManyUserInput = {
    id?: string
    dietTrackingId?: string | null
    name: string
    category: $Enums.MealCategory
    calories: number
    carbs: number
    protein: number
    fat: number
    date: Date | string
  }

  export type DietTrackingCreateManyUserInput = {
    id?: string
    date: Date | string
    totalCalories?: number
    totalCarbs?: number
    totalProtein?: number
    totalFat?: number
  }

  export type DailyMonitoringCreateManyUserInput = {
    id?: string
    date?: Date | string
    glucoseLevel: number
    bloodPressure: number
    cholesterol: number
    uricAcid: number
  }

  export type MealUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMealCategoryFieldUpdateOperationsInput | $Enums.MealCategory
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dietTracking?: DietTrackingUpdateOneWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dietTrackingId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMealCategoryFieldUpdateOperationsInput | $Enums.MealCategory
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dietTrackingId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMealCategoryFieldUpdateOperationsInput | $Enums.MealCategory
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DietTrackingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
    meals?: MealUpdateManyWithoutDietTrackingNestedInput
  }

  export type DietTrackingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutDietTrackingNestedInput
  }

  export type DietTrackingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
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

  export type MealCreateManyDietTrackingInput = {
    id?: string
    userId: string
    name: string
    category: $Enums.MealCategory
    calories: number
    carbs: number
    protein: number
    fat: number
    date: Date | string
  }

  export type MealUpdateWithoutDietTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMealCategoryFieldUpdateOperationsInput | $Enums.MealCategory
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserProfileUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutDietTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMealCategoryFieldUpdateOperationsInput | $Enums.MealCategory
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyWithoutDietTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMealCategoryFieldUpdateOperationsInput | $Enums.MealCategory
    calories?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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