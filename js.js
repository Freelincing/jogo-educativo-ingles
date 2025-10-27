        // Word pairs database with variety
// Word pairs database with variety
        const wordPairs = [
            // Original pairs (fixed where necessary)
            { type: 'translation', word: 'Beautiful', pair: 'Bonito/a' },
            { type: 'translation', word: 'Happy', pair: 'Feliz' },
            { type: 'verb', word: 'Go', pair: 'ir' },
            { type: 'verb', word: 'Eat', pair: 'comer' },
            { type: 'verb', word: 'Run', pair: 'correr' },
            { type: 'phrase', word: 'Good morning', pair: 'Bom dia' },
            { type: 'phrase', word: 'Thank you', pair: 'Obrigado/a' },
            { type: 'translation', word: 'Friend', pair: 'Amigo/a' },
            { type: 'translation', word: 'Water', pair: 'Água' },
            { type: 'verb', word: 'Write', pair: 'escrever' },
            { type: 'verb', word: 'See', pair: 'ver' },
            { type: 'translation', word: 'Love', pair: 'Amor' },
            { type: 'phrase', word: 'How are you?', pair: 'Como está?' },
            { type: 'translation', word: 'Book', pair: 'Livro' },
            { type: 'verb', word: 'Take', pair: 'levar' },
            { type: 'verb', word: 'Give', pair: 'Dar' },
            { type: 'verb', word: 'Make', pair: 'Fazer' },
            { type: 'translation', word: 'House', pair: 'Casa' },
            { type: 'translation', word: 'Food', pair: 'Comida' },
            { type: 'phrase', word: 'Good night', pair: 'Boa noite' },
            { type: 'translation', word: 'Dog', pair: 'Cão' },
            { type: 'translation', word: 'Cat', pair: 'Gato' },
            { type: 'verb', word: 'Think', pair: 'pensar' },
            { type: 'verb', word: 'Buy', pair: 'comprar' },
            { type: 'translation', word: 'Time', pair: 'Tempo' },
            { type: 'translation', word: 'Day', pair: 'Dia' },
            { type: 'phrase', word: 'See you later', pair: 'Até logo' },
            { type: 'verb', word: 'Come', pair: 'vir' },
            { type: 'verb', word: 'Know', pair: 'saber' },
            
            // Fixed/Corrected Original Entries (Correções de tipo e ortografia)
            { type: 'translation', word: 'Because', pair: 'Porque' }, 
            { type: 'translation', word: 'Why', pair: 'Porquê' },
            { type: 'translation', word: 'How', pair: 'Como' },
            { type: 'translation', word: 'When', pair: 'Quando' },
            { type: 'translation', word: 'What', pair: 'O quê' }, // Corrigido 'Oquê'
            { type: 'translation', word: 'Where', pair: 'Onde' },
            { type: 'translation', word: 'Who', pair: 'Quem' },
            { type: 'translation', word: 'Good', pair: 'Bom' },
            { type: 'translation', word: 'Snooze', pair: 'Soneca' },
            { type: 'translation', word: 'Music', pair: 'Música' },
            { type: 'verb', word: 'Sleep', pair: 'dormir' },
            { type: 'translation', word: 'Awake', pair: 'Acordado' },
            { type: 'translation', word: 'Window', pair: 'Janela' },
            { type: 'translation', word: 'Money', pair: 'Dinheiro' },
            { type: 'translation', word: 'Toe', pair: 'Dedo do pé' },
            { type: 'translation', word: 'Wrong', pair: 'Errado' },
            { type: 'verb', word: 'Write', pair: 'escrever' },
            { type: 'translation', word: 'White', pair: 'Branco' },
            { type: 'verb', word: 'Cook', pair: 'cozinhar' },
            { type: 'translation', word: 'Store', pair: 'Loja' },
            { type: 'translation', word: 'Friendly', pair: 'Amigável' }, // Corrigido 'amigavel'
            { type: 'translation', word: 'Cloud', pair: 'Nuvem' },
            { type: 'translation', word: 'Face', pair: 'Cara' },
            { type: 'translation', word: 'Safe', pair: 'Seguro' },
            { type: 'translation', word: 'Nobody', pair: 'Ninguém' }, // Corrigido 'No Budy'
            { type: 'translation', word: 'Blue', pair: 'Azul' },
            { type: 'verb', word: 'Move', pair: 'mover' },
            { type: 'verb', word: 'Turn On', pair: 'ligar' }, 
            { type: 'verb', word: 'Turn Off', pair: 'desligar' }, 
            { type: 'verb', word: 'Lock', pair: 'trancar' },
            { type: 'verb', word: 'Fly', pair: 'voar' },
            { type: 'translation', word: 'Apple', pair: 'Maçã' },
            { type: 'translation', word: 'Bad', pair: 'Mau' }, 
            { type: 'translation', word: 'World', pair: 'Mundo' },
            
            // New pairs for expansion (Novas palavras adicionadas)
            { type: 'translation', word: 'Sun', pair: 'Sol' },
            { type: 'translation', word: 'Moon', pair: 'Lua' },
            { type: 'verb', word: 'Speak', pair: 'falar' },
            { type: 'verb', word: 'Hear', pair: 'ouvir' },
            { type: 'verb', word: 'Want', pair: 'querer' },
            { type: 'phrase', word: 'I understand', pair: 'Eu percebo' },
            { type: 'phrase', word: 'I don\'t know', pair: 'Eu não sei' },
            { type: 'translation', word: 'Yesterday', pair: 'Ontem' },
            { type: 'translation', word: 'Tomorrow', pair: 'Amanhã' },
            { type: 'translation', word: 'Country', pair: 'País' },
            { type: 'translation', word: 'City', pair: 'Cidade' },
            { type: 'verb', word: 'Live', pair: 'morar/viver' },
            { type: 'verb', word: 'Work', pair: 'trabalhar' },
            { type: 'translation', word: 'Car', pair: 'Carro' },
            { type: 'translation', word: 'Tree', pair: 'Árvore' },
            { type: 'translation', word: 'Cold', pair: 'Frio' },
            { type: 'translation', word: 'Hot', pair: 'Quente' },
            { type: 'phrase', word: 'Excuse me', pair: 'Com licença' },
            { type: 'phrase', word: 'Sorry', pair: 'Desculpa' }
        ];


        let gameState = {
            playerName: '',
            currentPairs: [],
            selectedCards: [],
            pairsFound: 0,
            timeLeft: 120,
            timerInterval: null,
            gameStarted: false,
            currentLevel: 1,
            totalPairsCompleted: 0,
            usedPairs: [],
            isChecking: false
        };
        
        // --- Game Logic ---

        function startGame() {
            const name = document.getElementById('playerName').value.trim();
            if (!name) {
                alert('Please enter your name!');
                return;
            }
            
            // Clean up name
            gameState.playerName = name.substring(0, 20); 
            
            // Reset game state for a new game
            gameState.currentLevel = 1;
            gameState.timeLeft = 120;
            gameState.pairsFound = 0;
            gameState.totalPairsCompleted = 0;
            gameState.usedPairs = []; // Reset used pairs for a new session

            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('gameScreen').style.display = 'block';
            document.getElementById('mainNavbar').style.display = 'flex'; // Use flex to show it
            document.getElementById('playerNameDisplay').textContent = gameState.playerName;
            
            initializeGame();
            showCountdown(); // Maintain countdown only for the very first start
        }

        function getPairsForLevel(level) {
            // Nível 1: 5 pares, Nível 2: 6 pares, Nível 3: 7 pares, max 10 pairs
            return Math.min(4 + level, 12);
        }

        function initializeGame() {
            // Clear interval if exists
            if (gameState.timerInterval) {
                clearInterval(gameState.timerInterval);
                gameState.timerInterval = null;
            }

            const pairsCount = getPairsForLevel(gameState.currentLevel);
            
            // Get available pairs (not used in this game session)
            let availablePairs = wordPairs.filter(pair => !gameState.usedPairs.includes(pair));
            
            // If not enough pairs for next level, reset used pairs
            if (availablePairs.length < pairsCount) {
                gameState.usedPairs = [];
                availablePairs = [...wordPairs];
            }
            
            // Select random pairs
            const shuffled = [...availablePairs].sort(() => Math.random() - 0.5);
            gameState.currentPairs = shuffled.slice(0, pairsCount);
            
            // Mark these pairs as used
            gameState.currentPairs.forEach(pair => {
                if (!gameState.usedPairs.includes(pair)) {
                    gameState.usedPairs.push(pair);
                }
            });
            
            // Create cards array
            const cards = [];
            gameState.currentPairs.forEach((pair, idx) => {
                // Word is card, Pair is card
                cards.push({ id: `card-w-${idx}`, text: pair.word, pairId: idx, word: true });
                cards.push({ id: `card-p-${idx}`, text: pair.pair, pairId: idx, word: false });
            });
            
            // Shuffle cards
            cards.sort(() => Math.random() - 0.5);
            
            // Render cards
            const grid = document.getElementById('cardsGrid');
            grid.innerHTML = '';
            cards.forEach(card => {
                const btn = document.createElement('button');
                btn.className = 'card-btn';
                btn.textContent = card.text;
                btn.dataset.cardId = card.id;
                btn.dataset.pairId = card.pairId;
                btn.disabled = true; // Disabled during countdown/checking
                btn.onclick = () => selectCard(card.id, card.pairId, btn);
                grid.appendChild(btn);
            });
            
            gameState.pairsFound = 0;
            gameState.selectedCards = [];
            gameState.isChecking = false;
            
            // Update grid columns based on pairsCount
            // Minmax 200px, 1fr up to 5 columns
            let columns = Math.min(pairsCount, 5);
            grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

            updateDisplay();
        }

        function showCountdown() {
            let count = 3;
            const overlay = document.createElement('div');
            overlay.className = 'countdown-overlay';
            overlay.innerHTML = `<div class="countdown-number">${count}</div>`;
            document.body.appendChild(overlay);
            disableCards(); // Keep cards disabled

            const countInterval = setInterval(() => {
                count--;
                const numberElement = overlay.querySelector('.countdown-number');

                if (count > 0) {
                    numberElement.textContent = count;
                    numberElement.style.animation = 'none';
                    setTimeout(() => { numberElement.style.animation = 'countdownPulse 1s ease-out'; }, 10);
                } else {
                    numberElement.textContent = 'GO!';
                    numberElement.style.animation = 'none';
                    setTimeout(() => { numberElement.style.animation = 'countdownPulse 1s ease-out'; }, 10);

                    setTimeout(() => {
                        overlay.remove();
                        if (!gameState.timerInterval) {
                            startTimer();
                        }
                        enableCards();
                        gameState.isChecking = false; // Re-enable click after GO!
                    }, 1000);
                    clearInterval(countInterval);
                }
            }, 1000);
        }

        function enableCards() {
            document.querySelectorAll('.card-btn').forEach(btn => {
                // Only enable buttons that are not already hidden (found pairs)
                if (!btn.classList.contains('hidden')) {
                    btn.disabled = false;
                }
            });
        }

        function disableCards() {
            document.querySelectorAll('.card-btn').forEach(btn => {
                btn.disabled = true;
            });
        }

        function startTimer() {
            gameState.timerInterval = setInterval(() => {
                gameState.timeLeft--;
                updateDisplay();
                
                if (gameState.timeLeft <= 0) {
                    endGame(false); // Time's up
                }
            }, 1000);
        }

        function selectCard(cardId, pairId, btn) {
            if (gameState.isChecking || gameState.selectedCards.length >= 2 || btn.classList.contains('selected')) {
                return;
            }
            
            // Disable card temporarily after selection
            btn.disabled = true;
            btn.classList.add('selected');
            gameState.selectedCards.push({ cardId, pairId, btn });
            
            if (gameState.selectedCards.length === 2) {
                checkMatch();
            }
        }

        function checkMatch() {
            gameState.isChecking = true;
            disableCards(); // Disable all cards while checking
            
            const [card1, card2] = gameState.selectedCards;
            
            if (card1.pairId === card2.pairId) {
                // Correct match - immediate feedback
                card1.btn.classList.remove('selected');
                card2.btn.classList.remove('selected');
                card1.btn.classList.add('correct');
                card2.btn.classList.add('correct');
                
                setTimeout(() => {
                    // Hide the cards
                    card1.btn.classList.add('hidden');
                    card2.btn.classList.add('hidden');
                    
                    gameState.pairsFound++;
                    gameState.totalPairsCompleted++;
                    updateDisplay();
                    
                    const totalPairs = getPairsForLevel(gameState.currentLevel);
                    if (gameState.pairsFound === totalPairs) {
                        // Level complete - continue to next level
                        nextLevel();
                    } else {
                        // Re-enable cards for next match
                        gameState.selectedCards = [];
                        gameState.isChecking = false;
                        enableCards();
                    }
                }, 300);
            } else {
                // Wrong match - penalty
                card1.btn.classList.remove('selected');
                card2.btn.classList.remove('selected');
                card1.btn.classList.add('wrong');
                card2.btn.classList.add('wrong');
                
                showPenalty();
                gameState.timeLeft = Math.max(0, gameState.timeLeft - 3);
                updateDisplay();
                
                setTimeout(() => {
                    // Reset appearance
                    card1.btn.classList.remove('wrong');
                    card2.btn.classList.remove('wrong');
                    // Re-enable cards (including the wrong ones)
                    card1.btn.disabled = false;
                    card2.btn.disabled = false;
                    
                    gameState.selectedCards = [];
                    gameState.isChecking = false;
                    enableCards();
                    
                    if (gameState.timeLeft === 0) {
                        endGame(false);
                    }
                }, 500);
            }
        }

        function nextLevel() {
            disableCards();
            gameState.currentLevel++;
            
            // Show level up animation
            const overlay = document.createElement('div');
            overlay.className = 'level-up-overlay';
            overlay.innerHTML = `
                <div class="level-up-text">LEVEL ${gameState.currentLevel}!</div>
                <div class="level-up-subtext">Get ready for more pairs!</div>
            `;
            document.body.appendChild(overlay);
            
            setTimeout(() => {
                overlay.remove();
                initializeGame(); // Initialize new level
                
                // Pula o countdown e inicia o timer e as cartas imediatamente.
                if (!gameState.timerInterval) {
                    startTimer(); 
                }
                enableCards();
                gameState.isChecking = false;
                
            }, 2000);
        }

        function showPenalty() {
            const penalty = document.createElement('div');
            penalty.className = 'penalty-alert';
            penalty.textContent = '-3 seconds!';
            document.body.appendChild(penalty);
            
            setTimeout(() => penalty.remove(), 600);
        }

        function updateDisplay() {
            // Update Timer
            document.getElementById('timer').textContent = gameState.timeLeft;
            if (gameState.timeLeft <= 10 && gameState.timeLeft > 0) {
                document.getElementById('timer').style.color = 'var(--danger-red)';
            } else if (gameState.timeLeft > 10) {
                document.getElementById('timer').style.color = 'var(--primary-green)';
            }

            // Update Pairs Found
            const totalPairs = getPairsForLevel(gameState.currentLevel);
            document.getElementById('pairsFound').textContent = `${gameState.pairsFound}/${totalPairs}`;
            
            // Update Level
            document.getElementById('levelDisplay').textContent = `Level ${gameState.currentLevel}`;
            
            // Update Player Name Display (only visible on desktop)
            document.getElementById('playerNameDisplay').textContent = gameState.playerName;
        }

        function endGame(won) {
            clearInterval(gameState.timerInterval);
            gameState.timerInterval = null;
            disableCards();
            
            const score = gameState.totalPairsCompleted * 100 + gameState.timeLeft * 5;
            
            saveScore(score);
            showResults(score, won);
        }

        function saveScore(score) {
            const scores = JSON.parse(localStorage.getItem('linguaSprintScores') || '[]');
            scores.push({
                name: gameState.playerName,
                score: score,
                time: 120 - gameState.timeLeft, // Time taken
                level: gameState.currentLevel,
                totalPairs: gameState.totalPairsCompleted,
                date: new Date().toISOString()
            });
            localStorage.setItem('linguaSprintScores', JSON.stringify(scores));
        }

        // --- Result and Leaderboard Logic ---

        function showResults(score, won) {
            const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
            
            document.getElementById('finalScore').textContent = `${score} Points`;
            
            let message = '';
            let title = '';
            if (won) {
                title = 'CONGRATULATIONS!';
                message = `You completed level ${gameState.currentLevel - 1}! Try to beat your score!`;
            } else {
                title = 'Game Over!';
                message = gameState.timeLeft === 0 ? 
                    `Time's up! You completed ${gameState.totalPairsCompleted} pairs.` : 
                    `You ended the game. You completed ${gameState.totalPairsCompleted} pairs.`;
            }

            document.getElementById('resultTitle').textContent = title;
            document.getElementById('finalMessage').textContent = message;
            
            // Show player rank in the result modal
            showLeaderboard('leaderboardBodyResult', true); 
            
            resultModal.show();
        }

        function showLeaderboardModal() {
            showLeaderboard('leaderboardBodyModal');
            const leaderboardModal = new bootstrap.Modal(document.getElementById('leaderboardModal'));
            leaderboardModal.show();
        }

        function showLeaderboard(tbodyId, showPlayerOnly = false) {
            const scores = JSON.parse(localStorage.getItem('linguaSprintScores') || '[]');
            
            // Sort by score (desc), then totalPairs (desc), then time (asc)
            scores.sort((a, b) => {
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                if (b.totalPairs !== a.totalPairs) {
                    return b.totalPairs - a.totalPairs;
                }
                return a.time - b.time;
            });

            const leaderboardBody = document.getElementById(tbodyId);
            leaderboardBody.innerHTML = '';
            
            // Find current player's latest score
            const currentPlayerScore = scores.find(s => s.name === gameState.playerName && s.score > 0);
            
            let displayScores = scores;
            if (showPlayerOnly && currentPlayerScore) {
                // In the result modal, find the player's rank and show only them
                const playerRank = scores.findIndex(s => s === currentPlayerScore) + 1;
                displayScores = [
                    scores[0], // Rank 1
                    scores[1], // Rank 2
                    scores[2], // Rank 3
                    currentPlayerScore
                ].filter((v, i, a) => a.indexOf(v) === i && v).sort((a, b) => b.score - a.score).slice(0, 10);
                
            } else {
                // In the main modal, show top 10
                displayScores = scores.slice(0, 10);
            }

            displayScores.forEach((entry, index) => {
                const rank = scores.indexOf(entry) + 1; // Correct rank based on full list
                
                const tr = document.createElement('tr');
                
                // Highlight player's score
                if (entry === currentPlayerScore) {
                    tr.classList.add('table-success'); // Bootstrap green highlight
                }
                
                const rankClass = rank === 1 ? 'rank-1' : 
                                rank === 2 ? 'rank-2' : 
                                rank === 3 ? 'rank-3' : 'rank-other';
                
                const rankHtml = `<span class="rank-badge ${rankClass}">${rank}</span>`;
                
                tr.innerHTML = `
                    <td>${rankHtml}</td>
                    <td>${entry.name}</td>
                    <td>${entry.level}</td>
                    <td><strong>${entry.score}</strong></td>
                    <td>${entry.totalPairs}</td>
                `;
                leaderboardBody.appendChild(tr);
            });
            
            // If the player isn't in the top 10 and it's the main modal, show their current score again at the bottom
            if (!showPlayerOnly && currentPlayerScore && !displayScores.includes(currentPlayerScore)) {
                 const rank = scores.findIndex(s => s === currentPlayerScore) + 1;
                 const tr = document.createElement('tr');
                 tr.classList.add('table-info');
                 tr.innerHTML = `
                    <td><span class="rank-badge rank-other">${rank}</span></td>
                    <td>${currentPlayerScore.name} (Your Last Score)</td>
                    <td>${currentPlayerScore.level}</td>
                    <td><strong>${currentPlayerScore.score}</strong></td>
                    <td>${currentPlayerScore.totalPairs}</td>
                `;
                leaderboardBody.appendChild(tr);
            }
        }

        function resetGame() {
            // Hide Modals
            const resultModalEl = document.getElementById('resultModal');
            const resultModal = bootstrap.Modal.getInstance(resultModalEl);
            if (resultModal) {
                resultModal.hide();
            }

            // Reset Game State
            gameState.currentPairs = [];
            gameState.selectedCards = [];
            gameState.pairsFound = 0;
            gameState.timeLeft = 120;
            gameState.currentLevel = 1;
            gameState.totalPairsCompleted = 0;
            gameState.usedPairs = [];
            gameState.isChecking = false;
            
            if (gameState.timerInterval) {
                clearInterval(gameState.timerInterval);
                gameState.timerInterval = null;
            }

            // Reset UI
            document.getElementById('gameScreen').style.display = 'none';
            document.getElementById('mainNavbar').style.display = 'none';
            document.getElementById('landingPage').style.display = 'flex';
            document.getElementById('playerName').value = gameState.playerName; // Keep name for convenience
            document.getElementById('timer').style.color = 'var(--primary-green)'; // Reset timer color
            document.getElementById('cardsGrid').innerHTML = ''; // Clear cards
            updateDisplay();
        }

        // Optional: Check local storage on load
        document.addEventListener('DOMContentLoaded', () => {
            const savedName = localStorage.getItem('linguaSprintPlayerName');
            if (savedName) {
                document.getElementById('playerName').value = savedName;
                gameState.playerName = savedName;
            }
            
            document.getElementById('playerName').addEventListener('input', (e) => {
                localStorage.setItem('linguaSprintPlayerName', e.target.value.trim().substring(0, 20));
            });
        });