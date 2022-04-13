import { FC } from "react"
import { MintingTable, TrendingTable } from "./components"

const Trending: FC = () => {
    return (
        <div className="flex flex-col gap-10">
            <TrendingTable />
            <MintingTable />
        </div>
    )
}

export { Trending }
