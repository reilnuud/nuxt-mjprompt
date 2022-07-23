<template>
  <div
    class="font-sans text-stone-200 bg-stone-800 min-h-screen min-w-screen w-full flex flex-col"
  >
    <main class="flex-grow flex flex-col py-6">
      <Container>
        <h1 class="text-2xl text-stone-200">Midjourney Prompt Builder</h1>
      </Container>
      <OrganismsPromptBuilder />
    </main>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital@0;1&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        rel: "stylesheet",
      },
    ],
  },
};
</script>
