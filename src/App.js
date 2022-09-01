import React from "react";

import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";

import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/landingPage/LandingPage";
import { MenList } from "./components/menList/MenList";
import { MenDetails } from "./components/menList/menDetails/MenDetails";
import { MenSales } from "./components/menList/menSales/MenSales";
import { Brides } from "./components/womenlisting/brides/Brides";
import { Suits } from "./components/womenlisting/suits/Suits";
import { Lehangas } from "./components/womenlisting/lehangas/Lehangas";
import { Gharara } from "./components/womenlisting/gharara/Gharara";
import { BridesMaides } from "./components/womenlisting/bridesMaides/BridesMaides";
import { WomenSales } from "./components/womenlisting/womensales/WomenSales";
import { Chokers } from "./components/jewelry/chokers/Chokers";
import { Necklace } from "./components/jewelry/necklace/Necklace";
import { Earings } from "./components/jewelry/earings/Earings";
import { Bangles } from "./components/jewelry/bangles/Bangles";
import { Rings } from "./components/jewelry/rings/Rings";
import { Mathas } from "./components/jewelry/mathas/Mathas";
import { URLLIST } from "./constants/UrlsList";

/**
 * @author
 * @function App
 **/

export const App = (props) => {
	return (
		<div>
			<NavBar />
			<Routes>
				{/* {URLLIST.map((item, index) => {
					try {
						let path = item.importPath;
						let DynamicComponent = require(path);
						return (
							<Route
								key={index}
								path={item.urlPath}
								element={() => <DynamicComponent />}
							/>
						);
					} catch (e) {}
				})} */}

				<Route path='/' element={<LandingPage />} />
				<Route path='MenCloths' element={<MenList />} />
				<Route path='MenCloths/viewDetails/:id' element={<MenDetails />} />
				<Route path='MenSales/viewSalesDetails/:id' element={<MenDetails />} />
				<Route path='MenSales' element={<MenSales />} />
				<Route path='bridesList' element={<Brides />} />
				<Route path='suitsList' element={<Suits />} />
				<Route path='LehangasList' element={<Lehangas />} />
				<Route path='GhararaList' element={<Gharara />} />
				<Route path='BridesMaidesList' element={<BridesMaides />} />
				<Route path='WomenSalesListing' element={<WomenSales />} />
				<Route path='ChokersCollection' element={<Chokers />} />
				<Route path='NecklaceCollection' element={<Necklace />} />
				<Route path='EaringsCollection' element={<Earings />} />
				<Route path='BanglesCollection' element={<Bangles />} />
				<Route path='RingsCollection' element={<Rings />} />
				<Route path='MathasCollection' element={<Mathas />} />
			</Routes>
			<Footer />
		</div>
	);
};
