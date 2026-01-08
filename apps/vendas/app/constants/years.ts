import { z } from "zod"

export const years = [2024, 2025, 2026] as const

export const yearSchema = (config?: z.RawCreateParams) =>
  z.union([z.literal(2024), z.literal(2025), z.literal(2026)], config)

