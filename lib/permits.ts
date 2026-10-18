import permitsFile from "@/data/permits.json";
import type { Permit } from "./types";

export const permits = permitsFile as Permit[];
export const getPermit = (id: string) => permits.find((p) => p.id === id) ?? null;
