document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.className = 'site-header';

    const brandLink = document.createElement('a');
    brandLink.href = '/';
    brandLink.className = 'brand-title';
    brandLink.textContent = 'Мемори';

    const headerActions = document.createElement('div');
    headerActions.className = 'header-actions';

    const newGameHeaderBtn = document.createElement('button');
    newGameHeaderBtn.type = 'button';
    newGameHeaderBtn.id = 'new-game-header-btn';
    newGameHeaderBtn.textContent = 'Новая игра';

    const leaderboardHeaderBtn = document.createElement('button');
    leaderboardHeaderBtn.type = 'button';
    leaderboardHeaderBtn.id = 'leaderboard-header-btn';
    leaderboardHeaderBtn.className = 'leader-board'
    leaderboardHeaderBtn.textContent = 'Таблица лидеров';

    headerActions.append(newGameHeaderBtn, leaderboardHeaderBtn);
    header.append(brandLink, headerActions);


    const main = document.createElement('main');
    main.className = 'game-container';

    const gameCounters = document.createElement('section');
    gameCounters.className = 'game-counters';
    gameCounters.setAttribute('aria-label', 'Счётчики игры');

    const counterItemMoves = document.createElement('div');
    counterItemMoves.className = 'counter-item';
    const counterLabelMoves = document.createElement('span');
    counterLabelMoves.className = 'counter-label';
    counterLabelMoves.textContent = 'Ходов:';
    const movesCountOutput = document.createElement('output');
    movesCountOutput.id = 'moves-count';
    movesCountOutput.textContent = '0';
    counterItemMoves.append(counterLabelMoves, movesCountOutput);

    const counterItemPairs = document.createElement('div');
    counterItemPairs.className = 'counter-item';
    const counterLabelPairs = document.createElement('span');
    counterLabelPairs.className = 'counter-label';
    counterLabelPairs.textContent = 'Найдено пар:';
    const pairsCountOutput = document.createElement('output');
    pairsCountOutput.id = 'pairs-count';
    pairsCountOutput.textContent = '0 из 8';
    counterItemPairs.append(counterLabelPairs, pairsCountOutput);

    gameCounters.append(counterItemMoves, counterItemPairs);


    const gameBoard = document.createElement('section');
    gameBoard.className = 'game-board';
    gameBoard.setAttribute('aria-label', 'Игровое поле');

    for (let i = 0; i < 16; i++) {
        const cardButton = document.createElement('button');
        cardButton.type = 'button';
        cardButton.className = 'memory-card';
        cardButton.dataset.cardIndex = i;
        cardButton.dataset.state = 'closed';
        cardButton.setAttribute('aria-label', `Карточка ${i + 1}`);

        const cardImg = document.createElement('img');
        cardImg.className = 'card-back';
        cardImg.src = 'assets/card-back.svg';
        cardImg.alt = 'Рубашка карточки';

        cardButton.appendChild(cardImg);
        gameBoard.appendChild(cardButton);
    }

    main.append(gameCounters, gameBoard);


    const dialog = document.createElement('dialog');
    dialog.id = 'victory-modal';
    dialog.setAttribute('aria-labelledby', 'victory-title');

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const victoryTitle = document.createElement('h2');
    victoryTitle.id = 'victory-title';
    victoryTitle.textContent = 'Поздравляем! Вы победили!';

    const victoryResult = document.createElement('p');
    victoryResult.className = 'victory-result';
    victoryResult.textContent = 'Игра завершена за ';

    const finalMovesCount = document.createElement('strong');
    finalMovesCount.id = 'final-moves-count';
    finalMovesCount.textContent = '0';

    victoryResult.appendChild(finalMovesCount);
    victoryResult.appendChild(document.createTextNode(' ходов.'));

    const modalActions = document.createElement('div');
    modalActions.className = 'modal-actions';

    const modalNewGameBtn = document.createElement('button');
    modalNewGameBtn.type = 'button';
    modalNewGameBtn.id = 'modal-new-game-btn';
    modalNewGameBtn.className = 'new-game-modal';
    modalNewGameBtn.textContent = 'Новая игра';

    const modalCloseBtn = document.createElement('button');
    modalCloseBtn.type = 'button';
    modalCloseBtn.id = 'modal-close-btn';
    modalCloseBtn.textContent = 'Закрыть';

    modalActions.append(modalNewGameBtn, modalCloseBtn);
    modalContent.append(victoryTitle, victoryResult, modalActions);
    dialog.appendChild(modalContent);


    document.body.append(header, main, dialog);
});
