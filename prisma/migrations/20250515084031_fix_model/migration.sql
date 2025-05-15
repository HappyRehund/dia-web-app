/*
  Warnings:

  - You are about to drop the column `fat` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `protein` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the `DailyDiet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Meal` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fats` to the `FoodItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proteins` to the `FoodItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DailyDiet" DROP CONSTRAINT "DailyDiet_userId_fkey";

-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_dailyDietId_fkey";

-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_foodItemId_fkey";

-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_userId_fkey";

-- AlterTable
ALTER TABLE "FoodItem" DROP COLUMN "fat",
DROP COLUMN "protein",
ADD COLUMN     "fats" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proteins" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "calories" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "DailyDiet";

-- DropTable
DROP TABLE "Meal";

-- CreateTable
CREATE TABLE "DailyMeal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalCalories" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalCarbs" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalProteins" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalFats" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyMeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MealItem" (
    "id" TEXT NOT NULL,
    "dailyMealId" TEXT NOT NULL,
    "foodItemId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "mealType" "MealType" NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "proteins" DOUBLE PRECISION NOT NULL,
    "fats" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MealItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyMeal_userId_date_key" ON "DailyMeal"("userId", "date");

-- CreateIndex
CREATE INDEX "MealItem_dailyMealId_idx" ON "MealItem"("dailyMealId");

-- CreateIndex
CREATE INDEX "MealItem_foodItemId_idx" ON "MealItem"("foodItemId");

-- AddForeignKey
ALTER TABLE "DailyMeal" ADD CONSTRAINT "DailyMeal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealItem" ADD CONSTRAINT "MealItem_dailyMealId_fkey" FOREIGN KEY ("dailyMealId") REFERENCES "DailyMeal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealItem" ADD CONSTRAINT "MealItem_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "FoodItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
