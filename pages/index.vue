<template>
	<header>
		<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
			<div class="flex flex-wrap justify-between items-center">
				<div class="flex justify-start items-center">
					<NuxtLink to="/" class="flex mr-4">
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yari's Blog</span>
					</NuxtLink>
				</div>
				<div class="flex items-center lg:order-2">
					<img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt="Profile photo">
				</div>
			</div>
		</nav>
	</header>

	<section class="bg-white dark:bg-gray-900">
		<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
			<div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
				<h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Hi I'm Yari</h2>
				<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
					Welcome to my conner of the internet, here I share with you the latest tech news, cool porjects and usefull content to help you start your own dream projects
				</p>
			</div>

			<form action="#" method="GET" class="hidden lg:block mb-6">
				<div class="relative mt-1 lg:w-96">
					<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"></path>
						</svg>
					</div>
					<input 
						v-model="search" 
						type="text" 
						name="email" 
						id="topbar-search"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Search article">
				</div>
			</form>

			<div class="grid gap-8 lg:grid-cols-2">
				<article 
					v-for="post in filteredPosts" 
					:key="post.id"
					class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
					<div class="flex justify-between items-center mb-5 text-gray-500">
						<span
							class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
							<svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
							Article
						</span>
						<span class="text-sm">{{ post.date.split("T")[0].split("-").reverse().join("/") }}</span>
					</div>
					<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" v-html="post.title.rendered"/>
					<p class="mb-5 font-light text-gray-500 dark:text-gray-400" v-html="`${post.content.rendered.slice(0, 150)}...`" />
					<div class="flex justify-between items-center">
						<div class="flex items-center space-x-4">
							<img class="w-7 h-7 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
								alt="Jese Leos avatar" />
							<span class="font-medium dark:text-white">
								 {{ post?._embedded["author"][0].name }}
							</span>
						</div>
						<NuxtLink :to="`/${post.slug}`"
							class="inline-flex items-center font-medium text-primary-600 dark:text-white hover:underline">
							Read more
							<svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"></path>
							</svg>
						</NuxtLink>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Post } from '~~/types/post';

const { data: posts } = await useWordpressApi().getPosts();

const search = ref<string>('');

const searchByTitle = (post: Post): boolean => {
  return post.title.rendered.toLowerCase().includes(search.value.toLowerCase());
};

const filteredPosts = computed((): Post[] | null | undefined => {
  if (!search.value) {
    return posts.value;
  }
  return posts.value?.filter(searchByTitle);
});
</script>