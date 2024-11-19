export const convertObjectToArray = (data) => {
    return Object.entries(data).map(([id, info]) => ({
        id: Number(id), // Преобразуем идентификатор в число
        ...info // Распаковываем остальные свойства
  }))
}