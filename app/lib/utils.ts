import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const checkUpdateUrl = () => {
  const currentSearch = new URLSearchParams(window.location.search);

  const hasIsFilter = currentSearch.has("isFilter");

  // Chỉ cập nhật URL nếu chưa có isFilter
  if (!hasIsFilter) {
    currentSearch.set("isFilter", "true");

    // Cập nhật URL
    const newUrl = `${window.location.pathname}?${currentSearch.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }
};

export const removeIsFilterFromUrl = () => {
  const currentSearch = new URLSearchParams(window.location.search);
  currentSearch.delete("isFilter");

  // Cập nhật URL
  const newUrl = currentSearch.toString()
    ? `${window.location.pathname}?${currentSearch.toString()}`
    : window.location.pathname;
  window.history.replaceState({}, "", newUrl);
};

export const hasValue = (
  value: string | number | undefined | null
): value is string | number => {
  return value != null && value.toString().trim() !== "";
};
