const defeatScreen = (playerScore, computerScore) => {
  return `
  <div
  class="shadow p-3 mb-5 bg-body rounded bounce-in defeat-screen__container w-50 d-flex justify-content-center position-absolute background-img"
>
  <div class="card-body d-flex justify-content-center flex-column">
    <h1 class="text-center">Defeat</h1>
    <div class="d-flex justify-content-evenly">
      <aside
        class="player-scoreboard fs-3 d-flex flex-column align-items-center"
      >
        Player
        <div>${playerScore}</div>
      </aside>
      <aside
        class="computer-scoreboard fs-3 d-flex flex-column align-items-center"
      >
        Computer
        <div>${computerScore}</div>
      </aside>
    </div>
    <div type="button" onClick="window.location.reload();" class="play-again-button d-flex justify-content-center">Play Again</div>
  </div>
</div>
        `;
};

const displayDefeatScreen = () => {
  const defeatScreenContainer = document.querySelector(
    ".game__over-container--defeat"
  );
  defeatScreenContainer.innerHTML += defeatScreen(playerScore, computerScore);
};
