<template>
	<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
		<div class="flex justify-between px-4 mx-auto max-w-screen-xl">
			<article
				class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
				<header class="mb-4 lg:mb-6 not-format">
					<address class="flex items-center mb-6 not-italic">
						<div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
							<img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
								alt="Jese Leos" />
							<div>
								<a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{{
									post?._embedded["author"][0].name }}</a>
								<p class="text-base font-light text-gray-500 dark:text-gray-400">
									Senior Front-end Engineer
								</p>
								<p class="text-base font-light text-gray-500 dark:text-gray-400">
									<time pubdate datetime="2022-02-08" title="February 8th, 2022">{{
										post?.date.split("T")[0].split("-").reverse().join("/") }}</time>
								</p>
							</div>
						</div>
					</address>
					<h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
						{{ post?.title.rendered }}
					</h1>
				</header>

				<div class="flex flex-col gap-6">
					<div class="text-[22px] lead dark:text-gray-400" v-html="`${post?.content.rendered}`" />
				</div>

				<NuxtLink to="/" class="mt-8 inline-flex items-center font-medium text-primary-600 dark:text-white hover:underline">
					Back to posts
					<svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"></path>
					</svg>
				</NuxtLink>
			</article>
		</div>
	</main>
</template>

<script setup lang="ts">

interface WordpressPost {
	id: number;
	date: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
}

const { params } = useRoute();
const { data: posts } = await useWordpressApi().getPost<WordpressPost>(
	params.slug as string
);

const post = posts && posts.value && posts.value[0];

</script>
