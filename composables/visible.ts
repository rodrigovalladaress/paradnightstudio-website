export const useVisible = (timeout = 0) => {
  const isVisible = ref(false);

  function setVisible() {
    isVisible.value = true;
  }

  onMounted(() => {
    if (timeout) {
      window.setTimeout(setVisible, timeout);
    } else {
      setVisible();
    }
  });

  return {
    initialClasses: "appear appear-hidden",
    visibleClass: "appear-visible",
    isVisible,
  };
};
