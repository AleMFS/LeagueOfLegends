import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Champions } from "./Screens/Champions";
import { ChampionSelected } from "./Screens/ChampionSelected";



export function Router() {

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Champions />} />
                <Route path="/:id" element={<ChampionSelected />} />
            </Route>
        </Routes>
    )
}