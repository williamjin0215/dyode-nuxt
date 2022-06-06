<template>
	<section class="relative">
		<slick
			ref="slick"
			:options="slickOptions"
		>
			<div class="relative flex flex-col">
				<img class="w-full" src="/images/hero/hero-1.png" alt="slider-1" />
				<div class="lg:absolute bg-gray_1 flex flex-col items-center lg:bg-transparent lg:h-full lg:pl-32 lg:top-0 lg:left-0 lg:items-baseline lg:justify-center pt-3 pb-10 lg:p-0">
					<h2 class="font-pacifico text-green text-pacifico_header_sm lg:text-pacifico_header_lg mb-2">Shop New Arrivals</h2>
					<p class="font-lato text-green text-lato_base lg:text-lato_subheader_lg mb-4 lg:mb-6">Our coolest new items are waiting for you!</p>
					<button class="bg-black text-center px-5 py-3 font-fato text-lato_base text-white font-bold uppercase">
						Shop now
					</button>
				</div>
			</div>
			<div class="relative flex flex-col">
				<img class="w-full" src="/images/hero/hero-2.png" alt="slider-1" />
				<div class="lg:absolute bg-gray_1 flex flex-col items-center lg:bg-transparent lg:h-full lg:pl-32 lg:top-0 lg:left-0 lg:items-baseline lg:justify-center pt-3 pb-10 lg:p-0">
					<h2 class="font-pacifico text-white text-pacifico_header_sm lg:text-pacifico_header_lg mb-2">Our Fave Tees</h2>
					<p class="font-lato text-white text-lato_base lg:text-lato_subheader_lg mb-4 lg:mb-6">Shop all of our favorites.</p>
					<button class="bg-black text-center px-5 py-3 font-fato text-lato_base text-white font-bold uppercase">
						Shop now
					</button>
				</div>
			</div>
			<div class="relative flex flex-col">
				<img class="w-full" src="/images/hero/hero-1.png" alt="slider-1" />
				<div class="lg:absolute bg-gray_1 flex flex-col items-center lg:bg-transparent lg:h-full lg:pl-32 lg:top-0 lg:left-0 lg:items-baseline lg:justify-center pt-3 pb-10 lg:p-0">
					<h2 class="font-pacifico text-white text-pacifico_header_sm lg:text-pacifico_header_lg mb-2">Men's Tees</h2>
					<p class="font-lato text-white text-lato_base lg:text-lato_subheader_lg mb-4 lg:mb-6">Find the perfect shirt.</p>
					<button class="bg-black text-center px-5 py-3 font-fato text-lato_base text-white font-bold uppercase">
						Shop now
					</button>
				</div>
			</div>
		</slick>
	</section>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
  name: 'Hero',
	components: { Slick },
	data: function() {
		return {
			slickOptions: {
				arrows: false,
				slidesToShow: 1,
				infinite: true,
			},
		}
	}
}
</script>