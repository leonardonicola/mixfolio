export const useModal = () => {
  const title = useState<string>('title', () => '')
  const isOpen = useState<boolean>('isOpen', () => false)

  function openModal(newTitle: string) {
    title.value = newTitle
    isOpen.value = true

    // Impedir scroll quando aberto
    const body = document.body
    if (body) body.style.overflow = 'hidden'
  }

  function closeModal() {
    isOpen.value = false
    title.value = ''
    setTimeout(() => {
      // Resetar estilo do body com delay após fechar
      const body = document.body
      if (body) body.style.overflow = 'auto'
    }, 300)
  }

  return { title, isOpen, openModal, closeModal }
}
