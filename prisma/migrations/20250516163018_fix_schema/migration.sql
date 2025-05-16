/*
  Warnings:

  - You are about to drop the column `createdAt` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `fats` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `proteins` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the `DailyMeal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MealItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fat` to the `FoodItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `FoodItem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MealCategory" AS ENUM ('BREAKFAST', 'LUNCH', 'DINNER', 'SNACK');

-- DropForeignKey
ALTER TABLE "DailyMeal" DROP CONSTRAINT "DailyMeal_userId_fkey";

-- DropForeignKey
ALTER TABLE "MealItem" DROP CONSTRAINT "MealItem_dailyMealId_fkey";

-- DropForeignKey
ALTER TABLE "MealItem" DROP CONSTRAINT "MealItem_foodItemId_fkey";

-- AlterTable
ALTER TABLE "FoodItem" DROP COLUMN "createdAt",
DROP COLUMN "fats",
DROP COLUMN "proteins",
DROP COLUMN "updatedAt",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "DailyMeal";

-- DropTable
DROP TABLE "MealItem";

-- DropEnum
DROP TYPE "MealType";

-- CreateTable
CREATE TABLE "DietTracking" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "totalCalories" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalCarbs" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalProtein" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalFat" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "DietTracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dietTrackingId" TEXT,
    "name" TEXT NOT NULL,
    "category" "MealCategory" NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DietTracking_userId_date_key" ON "DietTracking"("userId", "date");

-- AddForeignKey
ALTER TABLE "DietTracking" ADD CONSTRAINT "DietTracking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_dietTrackingId_fkey" FOREIGN KEY ("dietTrackingId") REFERENCES "DietTracking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
