import type { PortableTextBlock } from '@portabletext/types'

export interface Author {
    name: string
}

export interface BlogPost {
    title: string
    slug: string
    date: string
    body: PortableTextBlock[]
    author: Author
    mainImage?: {
        _type: "image"
        asset: { _ref: string; _type: "reference" }
    }
}


export interface SanityImage {
    _type: "image"
    asset: {
        _ref: string
        _type: "reference"
    }
}
