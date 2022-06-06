<template>
	<section class="relative mx-5 mb-8 lg:mx-12 lg:mb-[68px]">
		<h1 class="mb-5 lg:mb-12 font-pacifico text-black text-center text-pacifico_header_sm lg:text-pacifico_header_lg">New Arrivals</h1>
		<slick
			ref="slick"
			:options="slickOptions"
		>
			<div class="flex flex-col text-center">
				<img class="w-full mb-3 lg:mb-5" src="/images/products/product.png" alt="product">
				<h3 class="lg:mb-2 font-lato text-black text-lato_subheader_md lg:text-lato_subheader_lg">Product Title</h3>
				<h4 class="mb-1 font-lato font-light uppercase text-black text-lato_subheader_xs lg:text-lato_subheader_sm">Women's t-shirt</h4>
				<span class="font-pacifico text-green text-pacifico_header_xs lg:text-pacifico_header_sm">$19.99</span>
			</div>
			<div class="flex flex-col text-center">
				<img class="w-full mb-3 lg:mb-5" src="/images/products/product.png" alt="product">
				<h3 class="lg:mb-2 font-lato text-black text-lato_subheader_md lg:text-lato_subheader_lg">Product Title</h3>
				<h4 class="mb-1 font-lato font-light uppercase text-black text-lato_subheader_xs lg:text-lato_subheader_sm">Women's t-shirt</h4>
				<span class="font-pacifico text-green text-pacifico_header_xs lg:text-pacifico_header_sm">$19.99</span>
			</div>
			<div class="flex flex-col text-center">
				<img class="w-full mb-3 lg:mb-5" src="/images/products/product.png" alt="product">
				<h3 class="lg:mb-2 font-lato text-black text-lato_subheader_md lg:text-lato_subheader_lg">Product Title</h3>
				<h4 class="mb-1 font-lato font-light uppercase text-black text-lato_subheader_xs lg:text-lato_subheader_sm">Women's t-shirt</h4>
				<span class="font-pacifico text-green text-pacifico_header_xs lg:text-pacifico_header_sm">$19.99</span>
			</div>
			<div class="flex flex-col text-center">
				<img class="w-full mb-3 lg:mb-5" src="/images/products/product.png" alt="product">
				<h3 class="lg:mb-2 font-lato text-black text-lato_subheader_md lg:text-lato_subheader_lg">Product Title</h3>
				<h4 class="mb-1 font-lato font-light uppercase text-black text-lato_subheader_xs lg:text-lato_subheader_sm">Women's t-shirt</h4>
				<span class="font-pacifico text-green text-pacifico_header_xs lg:text-pacifico_header_sm">$19.99</span>
			</div>
			<div class="flex flex-col text-center">
				<img class="w-full mb-3 lg:mb-5" src="/images/products/product.png" alt="product">
				<h3 class="lg:mb-2 font-lato text-black text-lato_subheader_md lg:text-lato_subheader_lg">Product Title</h3>
				<h4 class="mb-1 font-lato font-light uppercase text-black text-lato_subheader_xs lg:text-lato_subheader_sm">Women's t-shirt</h4>
				<span class="font-pacifico text-green text-pacifico_header_xs lg:text-pacifico_header_sm">$19.99</span>
			</div>
		</slick>
	</section>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
  name: 'FeaturedCollection',
	components: { Slick },
	data: function() {
		return {
			slickOptions: {
				arrows: true,
				slidesToShow: 4,
				infinite: true,
				prevArrow: "<button type='button' class='absolute z-50 block w-1.5 lg:w-5 cursor-pointer top-1/2 left-0 -translate-y-1/2' aria-label='Previous'><img src='/images/icon/prev.png' /></button>",
				nextArrow: "<button type='button' class='absolute z-50 block w-1.5 lg:w-5 cursor-pointer top-1/2 right-0 -translate-y-1/2' aria-label='Next'><img src='/images/icon/next.png' /></button>",
				responsive: [
					{
						breakpoint: 1023,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2
						}
					}
				]
			},
		}
	}
}
</script>