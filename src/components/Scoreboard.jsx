import React from 'react'
import { useState } from 'react'
import './style.scss'
import Addplayer from './Addplayer'
import Scores from './Scores'
import Players from './Players'

export default function Scoreboard() {

    const [doList, setDoList] = useState([
        {
            id: Date.now() * Math.random(),
            title: "Long Lung Linh",
            status: false,
            score: 0
        }
    ])

    function addList(e) {
        e.preventDefault();
        if (e.target.title.value == "") {
            console.log("Plz type this");
            return
        }

        let newDo = {
            id: Date.now() * Math.random(),
            title: e.target.title.value,
            status: false,
            score: 0
        }
        setDoList([newDo, ...doList]);
        e.target.title.value = '';
    }

    function deleteDo(doId, index) {
        setDoList(doList.filter(doItemFilter => doItemFilter.id != doId))
    }

    console.log("tổng player: ", doList.length);

    if (doList.length == 0) {
        setTimeout(() => {
            alert("Bạn đã xóa hết người chơi!")
        }, 500)
    }

    function increaseCount(doId) {
        const updateList = doList.map((doItem) => {
            if (doItem.id === doId && doItem.score < 10) {
                return { ...doItem, score: doItem.score + 1, score: doItem.score + 1 };
            }
            return doItem;
        });
        setDoList(updateList);
    }

    function decreaseCount(doId) {
        const updateList = doList.map((doItem) => {
            if (doItem.id === doId && doItem.score > 0) {
                console.log(doItem);
                return { ...doItem, score: doItem.score - 1, score: doItem.score - 1 };
            }

            return doItem;
        });
        setDoList(updateList);
    }

    const highestScore = Math.max(...doList.map((doItem) => doItem.score));
    // console.log("highestScore",highestScore);
    function isHighestScore(highest) {
        return highest > 0 && highest === highestScore;
    }

    const totalScore = doList.reduce((acc, doItem) => acc + doItem.score, 0);
    // console.log("totalScore",totalScore);

    return (
        <div className='container'>

            <Scores totalScore={totalScore} playerCount={doList.length} ></Scores>

            <Players
                deleteDo={deleteDo}
                doList={doList}
                decreaseCount={decreaseCount}
                increaseCount={increaseCount}
                isHighestScore={isHighestScore}

            ></Players>

            <Addplayer addList={addList}></Addplayer>

        </div>
    )
}
