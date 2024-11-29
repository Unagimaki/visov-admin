import { useSelector } from 'react-redux'
import styles from './panelContainer.module.scss'
import * as XLSX from 'xlsx';

export const PanelContainer = () => {
    const answers = useSelector(state => state.answers)
    const exportData = () => {
        // Создание рабочей книги
        const worksheet = XLSX.utils.json_to_sheet(answers); // Конвертация JSON в таблицу
        const workbook = XLSX.utils.book_new(); // Создание новой книги
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1'); // Добавление таблицы

        // Генерация файла Excel
        XLSX.writeFile(workbook, 'ExportedData.xlsx'); // Скачивание файла
    };
    return(
        <div className={styles.container}>
            <div>Количество ответов: {answers.length}</div>
            <button onClick={exportData}>Скачать таблицу</button>
        </div>
    )
}
