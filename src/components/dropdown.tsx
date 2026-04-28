"use client"

import { type KeyboardEvent, useMemo, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Button } from "./button"
import { Icon } from "./icon"

export interface DropdownItem {
    name: string
    value: string
}

interface DropdownProps {
    options: DropdownItem[]
    values: DropdownItem[]
    onChange: (values: DropdownItem[]) => void
    placeholder?: string
    className?: string
}

export function Dropdown({
    options,
    values,
    onChange,
    placeholder = "Make a selection..",
    className,
}: DropdownProps) {
    const [query, setQuery] = useState("")
    const [focused, setFocused] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const suggestions = useMemo(() => {
        const lowerQuery = query.toLowerCase()
        return options.filter((option) => {
            const isQueried = option.name.toLowerCase().includes(lowerQuery)
            const isSelected = values.some((v) => v.value === option.value)
            return isQueried && !isSelected
        })
    }, [query, values, options])

    const add = (item: DropdownItem) => {
        onChange([...values, item])
        setQuery("")
        inputRef.current?.focus()
    }

    const remove = (item: DropdownItem) => {
        onChange(values.filter((v) => v.value !== item.value))
    }

    const input = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && query === "" && values.length) {
            onChange(values.slice(0, -1))
        }
    }

    return (
        <div
            className={twMerge(
                "group relative w-full rounded-lg bg-card",
                className,
            )}
        >
            <div
                className={twMerge(
                    "flex flex-wrap gap-1 rounded-lg border border-card bg-card p-2 transition-colors duration-300",
                    "not-focus-within:hover:border-border group-focus-within:rounded-b-none group-focus-within:border-border group-focus-within:bg-background",
                )}
            >
                <Icon
                    variant="arrow_drop_down"
                    className="mr-1 text-input transition-all duration-100 group-focus-within:-rotate-180 group-focus-within:text-muted-foreground"
                />

                {values.map((item) => (
                    <Button
                        key={item.value}
                        variant="muted"
                        className="px-2 py-1 text-xs"
                        onClick={() => remove(item)}
                    >
                        {item.name} &times;
                    </Button>
                ))}

                <input
                    ref={inputRef}
                    className="min-w-30 flex-1 cursor-text bg-transparent text-muted-foreground outline-none placeholder:text-input"
                    placeholder={values.length ? "" : placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={input}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </div>

            {focused && (
                <div
                    className={twMerge(
                        "absolute top-full z-50 flex max-h-50 w-full flex-col overflow-auto p-2",
                        "rounded-b-lg border border-border border-t-0 bg-card shadow-background shadow-md",
                    )}
                >
                    {suggestions.length ? (
                        suggestions.map((item) => (
                            <Button
                                key={item.value}
                                variant="secondary"
                                className="not-hover:bg-transparent text-left not-hover:text-muted-foreground"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => add(item)}
                            >
                                {item.name}
                            </Button>
                        ))
                    ) : (
                        <div className="px-3 py-2 text-border">
                            No suggestions found..
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
