"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import { Dropdown, type DropdownItem } from "@/components"

type PortfolioFilterBarProps = {
    tags: string[]
}

export function PortfolioFilterBar({ tags }: PortfolioFilterBarProps) {
    const [filter, setFilter] = useState<DropdownItem[]>([])
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const options = useMemo(() => {
        return tags.map((v) => ({
            name: v,
            value: v,
        }))
    }, [tags])

    const onChange = (values: DropdownItem[]) => {
        const params = new URLSearchParams(searchParams.toString())

        if (values.length) {
            params.set("filter", values.map((v) => v.value).join(","))
        } else {
            params.delete("filter")
        }

        const query = params.size ? `?${params.toString()}` : ""
        router.replace(`${pathname}${query}`, { scroll: false })

        setFilter(values)
    }

    return (
        <Dropdown
            placeholder="Filter portfolio.."
            options={options}
            values={filter}
            onChange={onChange}
        />
    )
}
