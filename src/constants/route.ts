import { ECarTypeId } from "@enums/route";

const CarTypes = {
  [ECarTypeId.Limousine]: "Limousine",
  [ECarTypeId.Bed]: "Bed",
  [ECarTypeId.Chair]: "Chair",
};

const CarTypeArray = [
  { value: ECarTypeId.Limousine, label: CarTypes[ECarTypeId.Limousine] },
  { value: ECarTypeId.Bed, label: CarTypes[ECarTypeId.Bed] },
  { value: ECarTypeId.Chair, label: CarTypes[ECarTypeId.Chair] },
];

const TimeFilterId = {
  Morning: "1",
  Noon: "2",
  Evening: "3",
};

const TimeFilterArray = [
  {
    value: TimeFilterId.Morning,
    label: "Morning (6:00 - 11:00)",
  },
  {
    value: TimeFilterId.Noon,
    label: "Noon (12:00 - 15:00)",
  },
  {
    value: TimeFilterId.Morning,
    label: "Evening (16:00 - 22:00)",
  },
];

const PriceTypeId = {
  Up: "up",
  Down: "down",
};

const PriceTypeArray = [
  {
    value: PriceTypeId.Up,
    label: "Tăng dần",
  },
  {
    value: PriceTypeId.Down,
    label: "Giảm dần",
  },
];

const BookingStatusId = {
  Paid: "PAID",
  Cancel: "CANCEL",
  Run: "RUN",
  Finish: "FINISH",
  Ready: "READY",
  Checkin: "CHECKIN",
};

const StatusArray = [
  {
    value: null,
    label: "Tất cả",
  },
  {
    value: BookingStatusId.Ready,
    label: "Chuẩn bị",
  },
  {
    value: BookingStatusId.Run,
    label: "Đang chạy",
  },
  {
    value: BookingStatusId.Finish,
    label: "Đã xong",
  },
];

const CompletedStatus = [BookingStatusId.Finish, BookingStatusId.Cancel];
const UnfinishedStatus = [BookingStatusId.Paid, BookingStatusId.Run];
const CanCancelStatus = [BookingStatusId.Paid];

export {
  CarTypes,
  CarTypeArray,
  TimeFilterArray,
  PriceTypeArray,
  PriceTypeId,
  BookingStatusId,
  CompletedStatus,
  UnfinishedStatus,
  CanCancelStatus,
  StatusArray,
};
