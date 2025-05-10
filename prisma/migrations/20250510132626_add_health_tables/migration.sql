-- CreateTable
CREATE TABLE "DailyMonitoring" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "glucoseLevel" DOUBLE PRECISION NOT NULL,
    "bloodPressure" DOUBLE PRECISION NOT NULL,
    "cholesterol" DOUBLE PRECISION NOT NULL,
    "uricAcid" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DailyMonitoring_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "userId" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyMonitoring_userId_date_key" ON "DailyMonitoring"("userId", "date");

-- AddForeignKey
ALTER TABLE "DailyMonitoring" ADD CONSTRAINT "DailyMonitoring_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
