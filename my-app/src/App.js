import styles from './app.module.css';
import './index.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const [list, setList] = useState([]);

  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
    setError(''); // Сбрасываем ошибку при вводе нового значения
  };

  const handleAddToList = () => {
    if (value.length < 3) {
      setError('Введенное значение должно содержать минимум 3 символа');
    } else {
      setList([...list, value]);
      setValue(''); // Очищаем поле ввода
      setError(''); // Сбрасываем ошибку
    }
  };

  const onInputButtonClick = () => {
    const promptValue = prompt("Введите значение:");
    if (promptValue) {
      setValue(promptValue);
    }
  };

  const onAddButtonClick = () => {
    if (value.length < 3) {
      setError('Введенное значение должно содержать минимум 3 символа');
    } else {
      const updatedList = [...list, { id: Date.now(), value }]; // Создаем новый массив

      setList(updatedList); // Обновляем состояние list
      setValue(''); // Очищаем поле ввода
      setError(''); // Сбрасываем ошибку
    }
  };

  return (
    <div className="app">
    <h1 className={styles['page-heading']}>Ввод значения</h1>
    <p className={styles['no-margin-text']}>
      Текущее значение <code>value</code>: "<output className={styles['current-value']}>{value}</output>"
    </p>
    {error && <div className={styles['error']}>{error}</div>}
    <div className={styles['buttons-container']}>
      <button className={styles['button']} onClick={onInputButtonClick}>Ввести новое значение</button>
      <button className={styles['button']} onClick={onAddButtonClick} disabled={value.length < 3}>Добавить в список</button>
    </div>
    <div className={styles['list-container']}>
      <h2 className={styles['list-heading']}>Список:</h2>
      {list.length > 0 ? (
        <ul className={styles['list']}>
          {list.map((item) => (
            <li key={item.id} className={styles['list-item']}>{item.value}</li>
          ))}
        </ul>
      ) : (
        <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
      )}
        </div>
        <div>
            <button onClick={onInputButtonClick}>Ввести новое</button>
        </div>
    </div>
  );
}

export default App;
