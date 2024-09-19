<template>
  <div class="text-springsun leading-tight">
    <div v-if="!isSent">
      <form action="#" class="flex flex-col gap-[0.625rem]" @submit.prevent="onSubmit">
        <label for="mailing-list" class="text-m">
          Subscribe to our mailing list for updates on new games:
        </label>

        <div class="flex">
          <input
            id="mailing-list"
            v-model="email"
            class="flex-grow px-[10px] py-[7.08335px] leading-none border border-solid border-white
              bg-woodsmoke text-white placeholder:text-[#c7c7c7] focus:[&:not(:active)]:outline-dashed
              focus:[&:not(:active)]:outline-white"
            type="email"
            placeholder="name@email.com"
            :disabled="isSending"
          />

          <button
            class="px-[20px] bg-white outline-none border border-solid border-white border-l-0 text-woodsmoke
              font-sans-condensed tracking-wide leading-none uppercase transition-colors duration-200
              hover:bg-woodsmoke hover:text-white active:bg-tuna active:text-white
              focus:[&:not(:active)]:outline-dashed focus:[&:not(:active)]:outline-white"
            type="submit"
            :disabled="isSending"
          >
            Subscribe
          </button>
        </div>

        <p v-show="error" class="text-red-300">
          {{ error }}
        </p>

        <p class="text-[0.875rem]">
          We promise to send no more than two emails per month — usually less than that.
        </p>
      </form>
    </div>

    <div v-else>
      Thank you for subscribing! You should receive a confirmation email shortly.
    </div>
  </div>
</template>

<script lang="ts" setup>
const email = ref("");
const error = ref("An error occurred");
const isSending = ref(false);
const isSent = ref(false);

// console.log(import.meta.env.VITE_CONVERTKIT_PUBLIC_API_KEY);

watch(email, () => {
  error.value = "";
});

async function subscribeUser() {
  isSending.value = true;

  const { VITE_CONVERTKIT_PUBLIC_API_KEY: apiKey, VITE_CONVERTKIT_FORM_ID: formId } = (
    import.meta as ImportMeta & {
      env: { VITE_CONVERTKIT_PUBLIC_API_KEY: string; VITE_CONVERTKIT_FORM_ID: string };
    }
  ).env;

  const body = {
    api_key: apiKey,
    email: email.value,
  };

  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/23434343${formId}/subscribe`,
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      },
    );

    if (!res.ok) {
      const { message, error }: { message: string; error: string } = await res.json();

      throw new Error(message || error ? `${error} ${message}.` : "¯\\_(ツ)_/¯");
    }

    isSent.value = true;
  } catch (err) {
    console.error("Submission error:", err);

    let errorMessage = "Something wrong happened: ";
    if (err instanceof Error) {
      errorMessage += err.message;
    } else {
      errorMessage += `${err}`;
    }
    errorMessage += " Try again later.";

    error.value = errorMessage;
  } finally {
    isSending.value = false;
  }
}

function onSubmit() {
  subscribeUser();
}
</script>

<style lang="scss" scoped>
input:focus {
  outline: none;
}
</style>
