import { useState } from 'react';
import s from './HW4.module.css';
import { Button } from './Button';
import { Input } from './Input';

export const HW4 = () => {
  // 1️⃣ Раскомментируйте JSX (HwSprint2Week4.tsx) и вы увидите,
  // что приложение начнет гореть красным и ругаться 😡
  // 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
  // - прописать типизацию, где необходимо
  // - починить все, что горит красным
  // - дописать функциональность (где указано комментариями)
  // - приложение должно компилироваться и запускаться в браузере

  // ❗ Массив с данными не трогаем! Текст не меняем !

  const [currentText, setCurrentText] = useState('');
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);

  const handleSave = () => {
    setTexts([currentText, ...texts]);
    setCurrentText('');
  };

  return (
    <div id={'04'}>
      {currentText ? (
        <h1 id={'04-text'}>{currentText}</h1>
      ) : (
        <h1 id={'04-default-text'}>Здесь появится новое дело</h1>
      )}

      <Input currentText={currentText} setCurrentText={setCurrentText}/>

      <Button callBack={handleSave} name={'Добавить'}/>

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      <ol id={'04-tasks'}>
        {texts.map((el, index) => {
          return (
            <li key={index} id={`hw04-task-${index}`} className={(index+1) % 2 ? s.chetNechet : ''}>
              {el}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

