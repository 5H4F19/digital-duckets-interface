import { FC } from "react"
import { TrendingCollectionsTable } from "../../../_metronic/partials/widgets"


const Trending: FC = () => {
    return (
        <div className="flex flex-col gap-10">
            <TrendingCollectionsTable />
        </div>
    )
}

export { Trending }
