import { useList } from "@refinedev/core";
import { Typography, Box, Stack } from "@mui/material";

import {
	PieChart,
	EventReferrals,
	TotalRevenue,
	EventCard,
	TopAgent,
} from "components";

const Home = () => {
	return (
		<Box>
			<Typography fontSize={25} fontWeight={700} color={"#11142d"}>
				Dashboard
			</Typography>
			<Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
				<PieChart
					title="Tickets Sold"
					value={6}
					series={[75, 25]}
					colors={["#275be8", "#c4e8ef"]}
				/>
				<PieChart
					title="Venue Capacity"
					value={6}
					series={[75, 25]}
					colors={["#275be8", "#c4e8ef"]}
				/>
				<PieChart
					title="Door Sales"
					value={35}
					series={[75, 25]}
					colors={["#275be8", "#c4e8ef"]}
				/>
				<PieChart
					title="Guest List"
					value={55}
					series={[75, 25]}
					colors={["#275be8", "#c4e8ef"]}
				/>
			</Box>
			<Stack
				mt="25px"
				width='100%'
				direction={{ xs: "column", lg: "row" }}
				gap={4}
			>
				<TotalRevenue />
				<EventReferrals />
			</Stack>
		</Box>
	);
};

export default Home;
