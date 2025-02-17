<template>
    <div class="min-h-screen bg-white">
      <header class="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <nav class="max-w-5xl mx-auto px-6 py-4">
          <div class="flex justify-between items-center">
            <NuxtLink to="/" class="flex items-center space-x-2 text-2xl font-medium text-gray-900 hover:text-gray-600 transition">
              <img src="/Logo Icon - Default.svg" alt="TinaCMS Logo" class="h-8 w-8" />
              <span>TinaBlog</span>
            </NuxtLink>
            <div class="flex items-center space-x-8">
              <NuxtLink to="/posts" class="text-lg text-gray-600 hover:text-gray-900 transition">
                Blog
              </NuxtLink>
              <a href="https://tina.io/docs/" target="_blank" rel="noopener" class="text-lg text-gray-600 hover:text-gray-900 transition">
                Docs
              </a>
              <a href="https://tina.io/community/" target="_blank" rel="noopener" class="text-lg text-gray-600 hover:text-gray-900 transition">
                Community
              </a>
            </div>
          </div>
        </nav>
      </header>
  
      <main class="flex-1">
        <NuxtPage />
      </main>
  
      <footer class="bg-gray-50 border-t border-gray-200 mt-20">
        <div class="max-w-5xl mx-auto px-6 py-12">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-6">
              <img src="/Logo Icon - Default.svg" alt="TinaCMS Logo" class="h-8 w-8" />
              <img src="/icon-green.svg" alt="Nuxt Logo" class="h-8 w-8" />
            </div>
            <div class="flex space-x-6 text-gray-600">
              <a href="https://tina.io/" target="_blank" rel="noopener" class="hover:text-gray-900 transition">TinaCMS</a>
              <a href="https://nuxt.com/" target="_blank" rel="noopener" class="hover:text-gray-900 transition">Nuxt</a>
              <a href="https://github.com/tinacms/tinacms" target="_blank" rel="noopener" class="hover:text-gray-900 transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>