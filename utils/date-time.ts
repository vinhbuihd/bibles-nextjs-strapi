import { differenceInMinutes, format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { DateTimePattern } from "../constants/date";

export function formatDateTime(
  dateTime: Date | string,
  formatType = DateTimePattern.FULL_ISO
) {
  if (!dateTime) {
    return "";
  }
  return format(dateTime, formatType);
}

export const formatDateTimeToUTC = (
  date: Date,
  pattern = DateTimePattern.FULL_DASH_DATE_TIME
) => {
  return format(toZonedTime(date, "UTC"), pattern);
};

export function formatSecondsToTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return `${paddedMinutes}:${paddedSeconds}`;
}

export function formatTimeDistanceToNow(createdAt: string): string {
  const diff = differenceInMinutes(
    formatDateTimeToUTC(new Date()),
    formatDateTimeToUTC(new Date(createdAt))
  );

  if (diff < 1) {
    return "Vừa xong";
  } else if (diff < 60) {
    return `${diff} phút trước`;
  } else if (diff < 60 * 24) {
    const hours = Math.floor(diff / 60);
    return `${hours} giờ trước`;
  } else if (diff < 60 * 24 * 3) {
    const days = Math.floor(diff / (60 * 24));
    return `${days} ngày trước`;
  }

  return format(new Date(createdAt), "dd/MM/yyyy HH:mm");
}
