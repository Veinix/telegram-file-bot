import type { ReactNode } from "react"

function MainContent({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}

export default MainContent