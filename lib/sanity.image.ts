import imageUrlBuilder from "@sanity/image-url"
import { client } from "./sanity.client"
import type { SanityImage } from "@/types/index" // our custom type

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage) {
    return builder.image(source)
}
