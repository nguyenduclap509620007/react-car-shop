import { motion } from "framer-motion";
import CarouselHero from "../Component/Carousel";
import CarCard from "../Component/CarCard";

const featured = [
	{
		id: 1,
		name: "Chevrolet Camaro",
		price: 26.1,
		type: "sport",
		image: "/react-car-shop/images/chevroletcamaro.png",
		desc: "Sport 2 cửa, turbo.",
	},
	{
		id: 2,
		name: "Mazda MX-5 Miata 2023",
		price: 28.05,
		type: "sport",
		image: "/react-car-shop/images/MazdaMX-5Miata2023.png",
		desc: "Cơ bắp Mỹ.",
	},
	{
		id: 3,
		name: "Toyota GR 86",
		price: 28.4,
		type: "suv",
		image: "/react-car-shop/images/ToyotaGR86.png",
		desc: "SUV siêu sang, siêu mạnh.",
	},
];

export default function Home() {
	const handleBuy = (car) => alert(`Bạn đã chọn mua: ${car.name}`);

	return (
		<div style={{ position: "relative", minHeight: "80vh" }}>
			{/* Ảnh nền cho phần Home */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: 0,
					backgroundImage: "url('/react-car-shop/images/banner-bg.png')", // Đổi đường dẫn ảnh nền tại đây
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					opacity: 1, // Có thể chỉnh độ mờ nếu muốn
				}}
			/>
			{/* Nội dung chính */}
			<div
				className="mt-3 px-2 px-md-5"
				style={{
					paddingTop: "70px",
					position: "relative",
					zIndex: 1,
				}}
			>
				<CarouselHero />

				<section className="container mt-5 px-0">
					<motion.h2
						className="mb-3 text-center fw-bold"
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
					>
						Featured Cars
					</motion.h2>

					<div className="row g-4">
						{featured.map((c, index) => (
							<motion.div
								key={c.id}
								className="col-12 col-sm-6 col-lg-4"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.3, duration: 0.6 }}
								whileHover={{ scale: 1.05, rotate: 1 }}
							>
								<CarCard car={c} onBuy={handleBuy} />
							</motion.div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
