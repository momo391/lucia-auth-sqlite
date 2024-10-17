<script>
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import bgImage from '$lib/assets/cute-cat.jpg?enhanced';
	import Overlay from '$lib/components/addons/overlay.svelte';
	import Line from '$lib/components/addons/line.svelte';
	import ModeToggle from '$lib/components/mode-toggle.svelte';
</script>

<main class="min-h-screen flex items-center flex-col gap-16 justify-start">
	<section class="min-h-screen relative">
		<enhanced:img src={bgImage} alt={'Cute cat'} class="h-screen w-screen object-cover" />
		<Overlay style="absolute inset-0 bg-black opacity-50" />
		<div class="absolute inset-0 flex items-center justify-center flex-col gap-2">
			<p class="text-center text-4xl font-semibold uppercase text-white">black vision</p>
			<p class="w-screen max-w-xl px-2 text-sm text-center line-clamp-3 text-white font-light">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat animi maxime error
				laudantium, consectetur quod neque aperiam reprehenderit a qui quam ipsa recusandae,
				suscipit magnam blanditiis quisquam ex ab.
			</p>

			<div
				class="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4 *:capitalize"
			>
				<Button size={'lg'} href={'gallery'}>browse gallery</Button>
				<Button variant={'secondary'} size={'lg'} href={'contact'}>get in touch</Button>
				<ModeToggle />
			</div>
		</div>
	</section>

	<section class="p-2 flex flex-col gap-4">
		<div class="p-2 flex items-center justify-center flex-col">
			<p class="text-center text-2xl uppercase font-semibold">latest uploads</p>
			<div>
				<p class="text-center max-w-md line-clamp-2 text-sm font-extralight">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis doloribus
					facilis unde eaque? Autem tenetur consectetur sunt laboriosam. Reprehenderit esse
					voluptatum tempore, eveniet id blanditiis qui sint quod magnam!
				</p>
			</div>
		</div>
		<div class="flex items-center justify-center gap-4 flex-col sm:flex-row max-w-6xl">
			{#each [bgImage, bgImage, bgImage] as image}
				<enhanced:img
					src={image}
					alt={'Cute cat'}
					class="size-full aspect-square object-cover dark:grayscale"
				/>
			{/each}
		</div>
		<div class="flex items-center justify-center *:capitalize">
			<Button variant={'secondary'} size={'lg'}>see more</Button>
		</div>
	</section>

	<Line />

	<section class="p-2 flex flex-col gap-4">
		<div class="p-2 flex items-center justify-center flex-col">
			<p class="text-center text-2xl uppercase font-semibold">our services</p>
			<div>
				<p class="text-center max-w-md line-clamp-2 text-sm font-extralight">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis doloribus
					facilis unde eaque? Autem tenetur consectetur sunt laboriosam. Reprehenderit esse
					voluptatum tempore, eveniet id blanditiis qui sint quod magnam!
				</p>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-6xl">
			{#each [1, 2, 3] as service}
				<Card.Root>
					<Card.Header>
						<Card.Title>
							<p class="text-center text-2xl uppercase">lorem ipsum</p>
						</Card.Title>
						<Card.Description>
							<p class="text-center">price here</p>
						</Card.Description>
					</Card.Header>
					<Card.Content>
						<p class="text-base font-light text-left px-2 line-clamp-5">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit
							ipsum ad quasi assumenda. At, molestias possimus. Incidunt, accusamus. Cum eius
							eligendi voluptatem cupiditate nisi dolorem, est repellendus molestiae deserunt.
						</p>
					</Card.Content>
					<Card.Footer>
						<div class="flex items-center justify-center w-full *:capitalize">
							<Button>demand now</Button>
						</div>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</section>

	<Line />

	<section>
		<p>video here</p>
	</section>
</main>
