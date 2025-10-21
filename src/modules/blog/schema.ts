import z from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const blogSchema = z.object({
    image :z.any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ).optional(),
    
    title : z.string({
        message: "Title is required",
    })
    .min(3, "Title must be at least 3 characters long")
    .max(150, "Title must be at most 150 characters long"),
    description: z.string({
        message: "Description is required",
    }).min(20, "Description must be at least 20 characters long")
    .max(150, "Description must be at most 150 characters long"),
    tags: z.array(z.string())
    .min(1, "At least one tag is required")
    .max(5, "Maximum of 5 tags allowed"),
    content:z.string({
        message: "Blog content is required",
    })
})
