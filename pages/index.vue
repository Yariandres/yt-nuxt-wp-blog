<template>
  <header>
		<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
			<div class="flex flex-wrap justify-between items-center">
				<div class="flex justify-start items-center">
					<a href="https://flowbite.com" class="flex mr-4">
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yari's Blog</span>
					</a>
					<form action="#" method="GET" class="hidden lg:block lg:pl-2">
						<label for="topbar-search" class="sr-only">Search</label>
						<div class="relative mt-1 lg:w-96">
							<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
							</div>
							<input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search">
						</div>
					</form>
				</div>
				<div class="flex items-center lg:order-2">
					<img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
				</div>
			</div>
		</nav>
	</header>
</template>