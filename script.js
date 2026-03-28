const heroes = [
    { name: 'Aamon', img: 'aamon.png' },
    { name: 'Akai', img: 'akai.png' },
    { name: 'Aldous', img: 'aldous.png' },
    { name: 'Alice', img: 'alice.png' },
    { name: 'Alpha', img: 'alpha.png' },
    { name: 'Alucard', img: 'alucard.png' },
    { name: 'Angela', img: 'angela.png' },
    { name: 'Argus', img: 'argus.png' },
    { name: 'Arlott', img: 'arlott.png' },
    { name: 'Atlas', img: 'atlas.png' },
    { name: 'Aulus', img: 'aulus.png' },
    { name: 'Aurora', img: 'aurora.png' },
    { name: 'Badang', img: 'badang.png' },
    { name: 'Balmond', img: 'balmond.png' },
    { name: 'Bane', img: 'bane.png' },
    { name: 'Barats', img: 'barats.png' },
    { name: 'Baxia', img: 'baxia.png' },
    { name: 'Beatrix', img: 'beatrix.png' },
    { name: 'Belerick', img: 'belerick.png' },
    { name: 'Benedetta', img: 'benedetta.png' },
    { name: 'Brody', img: 'brody.png' },
    { name: 'Bruno', img: 'bruno.png' },
    { name: 'Carmilla', img: 'carmilla.png' },
    { name: 'Cecilion', img: 'cecilion.png' },
    { name: "Chang'e", img: 'chang_e.png' },
    { name: 'Chip', img: 'chip.png' },
    { name: 'Chou', img: 'chou.png' },
    { name: 'Cici', img: 'cici.png' },
    { name: 'Claude', img: 'claude.png' },
    { name: 'Clint', img: 'clint.png' },
    { name: 'Cyclops', img: 'cyclops.png' },
    { name: 'Diggie', img: 'diggie.png' },
    { name: 'Dyrroth', img: 'dyrroth.png' },
    { name: 'Edith', img: 'edith.png' },
    { name: 'Esmeralda', img: 'esmeralda.png' },
    { name: 'Estes', img: 'estes.png' },
    { name: 'Eudora', img: 'eudora.png' },
    { name: 'Fanny', img: 'fanny.png' },
    { name: 'Faramis', img: 'faramis.png' },
    { name: 'Floryn', img: 'floryn.png' },
    { name: 'Franco', img: 'franco.png' },
    { name: 'Fredrinn', img: 'fredrinn.png' },
    { name: 'Freya', img: 'freya.png' },
    { name: 'Gatotkaca', img: 'gatotkaca.png' },
    { name: 'Gloo', img: 'gloo.png' },
    { name: 'Gord', img: 'gord.png' },
    { name: 'Granger', img: 'granger.png' },
    { name: 'Grock', img: 'grock.png' },
    { name: 'Guinevere', img: 'guinevere.png' },
    { name: 'Gusion', img: 'gusion.png' },
    { name: 'Hanabi', img: 'hanabi.png' },
    { name: 'Hanzo', img: 'hanzo.png' },
    { name: 'Harith', img: 'harith.png' },
    { name: 'Harley', img: 'harley.png' },
    { name: 'Hayabusa', img: 'hayabusa.png' },
    { name: 'Helcurt', img: 'helcurt.png' },
    { name: 'Hilda', img: 'hilda.png' },
    { name: 'Hylos', img: 'hylos.png' },
    { name: 'Irithel', img: 'irithel.png' },
    { name: 'Ixia', img: 'ixia.png' },
    { name: 'Jawhead', img: 'jawhead.png' },
    { name: 'Johnson', img: 'johnson.png' },
    { name: 'Joy', img: 'joy.png' },
    { name: 'Julian', img: 'julian.png' },
    { name: 'Kadita', img: 'kadita.png' },
    { name: 'Kagura', img: 'kagura.png' },
    { name: 'Kaja', img: 'kaja.png' },
    { name: 'Karina', img: 'karina.png' },
    { name: 'Karrie', img: 'karrie.png' },
    { name: 'Khaleed', img: 'khaleed.png' },
    { name: 'Khufra', img: 'khufra.png' },
    { name: 'Kimmy', img: 'kimmy.png' },
    { name: 'Lancelot', img: 'lancelot.png' },
    { name: 'Lukas', img: 'lukas.png' },
    { name: 'Lapu Lapu', img: 'lapulapu.png' },
    { name: 'Layla', img: 'layla.png' },
    { name: 'Leomord', img: 'leomord.png' },
    { name: 'Lesley', img: 'lesley.png' },
    { name: 'Ling', img: 'ling.png' },
    { name: 'Lolita', img: 'lolita.png' },
    { name: 'Lunox', img: 'lunox.png' },
    { name: 'Luo Yi', img: 'luoyi.png' },
    { name: 'Lylia', img: 'lylia.png' },
    { name: 'Marcel', img: 'marcel.png' },
    { name: 'Martis', img: 'martis.png' },
    { name: 'Masha', img: 'masha.png' },
    { name: 'Mathilda', img: 'mathilda.png' },
    { name: 'Melissa', img: 'melissa.png' },
    { name: 'Minotaur', img: 'minotaur.png' },
    { name: 'Minsitthar', img: 'minsitthar.png' },
    { name: 'Miya', img: 'miya.png' },
    { name: 'Moskov', img: 'moskov.png' },
    { name: 'Nana', img: 'nana.png' },
    { name: 'Natalia', img: 'natalia.png' },
    { name: 'Natan', img: 'natan.png' },
    { name: 'Nolan', img: 'nolan.png' },
    { name: 'Novaria', img: 'novaria.png' },
    { name: 'Odette', img: 'odette.png' },
    { name: 'Paquito', img: 'paquito.png' },
    { name: 'Pharsa', img: 'pharsa.png' },
    { name: 'Phoveus', img: 'phoveus.png' },
    { name: 'Popol and Kupa', img: 'popolandkupa.png' },
    { name: 'Rafaela', img: 'rafaela.png' },
    { name: 'Roger', img: 'roger.png' },
    { name: 'Ruby', img: 'ruby.png' },
    { name: 'Saber', img: 'saber.png' },
    { name: 'Selena', img: 'selena.png' },
    { name: 'Silvanna', img: 'silvanna.png' },
    { name: 'Sun', img: 'sun.png' },
    { name: 'Suyou', img: 'suyou.png' },
    { name: 'Terizla', img: 'terizla.png' },
    { name: 'Thamuz', img: 'thamuz.png' },
    { name: 'Tigreal', img: 'tigreal.png' },
    { name: 'Uranus', img: 'uranus.png' },
    { name: 'Vale', img: 'vale.png' },
    { name: 'Valentina', img: 'valentina.png' },
    { name: 'Valir', img: 'valir.png' },
    { name: 'Vexana', img: 'vexana.png' },
    { name: 'Wanwan', img: 'wanwan.png' },
    { name: 'Xavier', img: 'xavier.png' },
    { name: 'X.Borg', img: 'xborg.png' },
    { name: 'Yin', img: 'yin.png' },
    { name: 'Yi Sun-shin', img: 'yisunshin.png' },
    { name: 'Yu Zhong', img: 'yuzhong.png' },
    { name: 'Yve', img: 'yve.png' },
    { name: 'Zhask', img: 'zhask.png' },
    { name: 'Zhuxin', img: 'zhuxin.png' },
    { name: 'Zilong', img: 'zilong.png' }
];



// Menampilkan dropdown berdasarkan pencarian
function filterDropdown(id) {
    const searchInput = document.getElementById(`search-${id}`).value.toLowerCase();
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);
    dropdownItems.innerHTML = ''; // Kosongkan dropdown sebelum ditampilkan

    // Filter heroes berdasarkan pencarian
    heroes
        .filter(hero => hero.name.toLowerCase().includes(searchInput))
        .forEach(hero => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.textContent = hero.name;
            item.onclick = () => selectHero(hero, id);
            dropdownItems.appendChild(item);
        });
}

// Menampilkan gambar hero yang dipilih dengan animasi saat berubah
function selectHero(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const existingImage = imageDisplay.querySelector('img');

    if (existingImage) {
        // Jika ada gambar yang sudah ada, tambahkan animasi fly-out
        existingImage.classList.add('fly-out');
        // Ganti gambar setelah animasi fly-out selesai (0.5 detik)
        setTimeout(() => {
            updateHeroImage(hero, id);
        }, 500);
    } else {
        // Jika belum ada gambar, langsung tampilkan gambar baru
        updateHeroImage(hero, id);
    }

































}

// Fungsi untuk meng-update gambar hero dengan animasi fly-in
function updateHeroImage(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    imageDisplay.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
    document.getElementById(`search-${id}`).value = hero.name;
    document.getElementById(`dropdown-items-${id}`).innerHTML = ''; // Sembunyikan dropdown
}

// Reset semua dropdown dan input dengan animasi fly-out
function resetAllDropdowns() {
    for (let i = 1; i <= 20; i++) {
        const imageDisplay = document.getElementById(`image-display-${i}`);
        if (imageDisplay.innerHTML) {
            // Tambahkan kelas animasi fly-out
            imageDisplay.querySelector('img').classList.add('fly-out');
        }

        // Hapus nilai input dan dropdown setelah animasi selesai
        setTimeout(() => {
            document.getElementById(`search-${i}`).value = '';
            imageDisplay.innerHTML = '';
            document.getElementById(`dropdown-items-${i}`).innerHTML = '';
        }, 500); // Delay sesuai dengan durasi animasi (0.5 detik)
    }
}

 // Fungsi untuk mengupdate output NICKNAME=------------=-=-==-
 function updateOutput() {
    for (let i = 1; i <= 10; i++) {
        const inputText = document.getElementById('input' + i).value;
        document.getElementById('output' + i).textContent = ` ${inputText}`;
    }
}

// Fungsi untuk mereset semua input
function resetInputs() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('input' + i).value = '';
        document.getElementById('output' + i).textContent = ` `;
    }
}

// Fungsi untuk menukar nilai 1-5 dengan 6-10
function switchInputs() {
    for (let i = 1; i <= 5; i++) {
        const temp = document.getElementById('input' + i).value;
        document.getElementById('input' + i).value = document.getElementById('input' + (i + 5)).value;
        document.getElementById('input' + (i + 5)).value = temp;
    }
    // Update output setelah switch
    updateOutput();
}

 // Fungsi untuk menukar gambar dan nama tim
 function swapContent() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    const teamDisplay1 = document.getElementById('teamNameDisplay1');
    const teamDisplay2 = document.getElementById('teamNameDisplay2');
    const tempTeamDisplay = teamDisplay1.textContent;
    teamDisplay1.textContent = teamDisplay2.textContent;
    teamDisplay2.textContent = tempTeamDisplay;
}

// Fungsi untuk memuat gambar dari file lokal
function loadImage(event, imgId) {
    const img = document.getElementById(imgId);
    img.src = URL.createObjectURL(event.target.files[0]);
}

// Fungsi untuk mengupdate nama tim yang ditampilkan
function updateTeamName() {
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;
    document.getElementById('teamNameDisplay1').textContent = team1;
    document.getElementById('teamNameDisplay2').textContent = team2;
}

// Fungsi untuk mereset gambar, nama tim, dan checkbox ke kondisi awal
function resetContent() {
    document.getElementById('team1').value = "Team 1";
    document.getElementById('team2').value = "Team 2";
    updateTeamName();

    document.getElementById('image1').src = "https://via.placeholder.com/300x200?text=Image+1";
    document.getElementById('image2').src = "https://via.placeholder.com/300x200?text=Image+2";

    document.getElementById('file1').value = "";
    document.getElementById('file2').value = "";

    // Reset checkbox dan gambar tambahan
    for (let i = 1; i <= 6; i++) {
        document.getElementById('checkbox' + i).unchecked = true;
        document.getElementById('extraImage' + i).style.display = "block";
    }
}

// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
function toggleImage(imageId) {
    const image = document.getElementById(imageId);
    const checkbox = document.getElementById('checkbox' + imageId.slice(-1));
    image.style.display = checkbox.checked ? "block" : "none";
}

// Fungsi untuk menukar semua (nama tim, gambar utama, dan status checkbox 1-3 dengan 4-6)
function switchAll() {
    // Tukar nama tim
    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');
    const tempName = team1.value;
    team1.value = team2.value;
    team2.value = tempName;
    updateTeamName();

    // Tukar gambar utama
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    // Tukar status checkbox dan visibilitas gambar tambahan
    for (let i = 1; i <= 3; i++) {
        const checkboxA = document.getElementById('checkbox' + i);
        const checkboxB = document.getElementById('checkbox' + (i + 3));
        const extraImageA = document.getElementById('extraImage' + i);
        const extraImageB = document.getElementById('extraImage' + (i + 3));

        // Tukar status checkbox
        const tempChecked = checkboxA.checked;
        checkboxA.checked = checkboxB.checked;
        checkboxB.checked = tempChecked;

        // Tukar tampilan gambar berdasarkan checkbox
        extraImageA.style.display = checkboxA.checked ? "block" : "none";
        extraImageB.style.display = checkboxB.checked ? "block" : "none";
    }
}

    // Ambil elemen input dan output
    const tournamentnameInput = document.getElementById('tournamentnamemid');
    const tournamentnameOutput = document.getElementById('tournamentnameOutput');

    // Fungsi untuk menampilkan teks yang sama di output saat user mengetik
    tournamentnameInput.addEventListener('input', function() {
      tournamentnameOutput.textContent = tournamentnameInput.value;
    });

//timer

const phases = [
    { type: "Blue Ban Phase", direction: "Left.gif" },
    { type: "Red Ban Phase", direction: "Right.gif" },
    { type: "Blue Ban Phase", direction: "Left.gif" },
    { type: "Red Ban Phase", direction: "Right.gif" },
    { type: "Blue Pick Phase", direction: "Left.gif" },
    { type: "Red Pick Phase", direction: "Right.gif" },
    { type: "Blue Pick Phase", direction: "Left.gif" },
    { type: "Red Pick Phase", direction: "Right.gif" },
    { type: "Red Ban Phase", direction: "Right.gif" },
    { type: "Blue Ban Phase", direction: "Left.gif" },
    { type: "Red Pick Phase", direction: "Right.gif" },
    { type: "Blue Pick Phase", direction: "Left.gif" },
    { type: "Red Pick Phase", direction: "Right.gif" },
];

let currentPhaseIndex = 0; // Track the current phase
let timer = 31; // Timer duration in seconds
let timerInterval; // Store the interval for the timer
let timerRunning = false; // Track if the timer is running

const phaseElement = document.getElementById('phase');
const arrowElement = document.getElementById('arrow');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const nextPhaseButton = document.getElementById('nextPhase');
const resetButton = document.getElementById('reset');

// Update the UI based on the current phase
function updateUI() {
    if (currentPhaseIndex < phases.length) {
        const currentPhase = phases[currentPhaseIndex];
        phaseElement.textContent = `${currentPhase.type}`;
        arrowElement.src = currentPhase.direction; // Update arrow image
        timerElement.textContent = timer;
        nextPhaseButton.disabled = false; // Enable "Next Phase" button
    } else {
        // When all phases are completed
        phaseElement.textContent = "Finalizing";
        arrowElement.src = "Adjustment.gif"; // Remove arrow image
        timerElement.textContent = "VS";
        nextPhaseButton.disabled = true; // Disable the button
    }
}

// Start the timer
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                timerElement.textContent = timer;
            } else {
                clearInterval(timerInterval); // Stop timer when it reaches 0
                timerRunning = false; // Timer stops running
                moveToNextPhase(); // Automatically move to the next phase
            }
        }, 1000);
    }
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval); // Stop the timer
    timerRunning = false;
}

// Move to the next phase
function moveToNextPhase() {
    if (currentPhaseIndex < phases.length) {
        currentPhaseIndex++;
        updateUI();
        if (currentPhaseIndex < phases.length) {
            timer = 31; // Reset timer
            startTimer(); // Restart timer
        }
    }
}

// Reset the entire process
function reset() {
    clearInterval(timerInterval); // Stop the timer
    currentPhaseIndex = 0; // Reset phase index
    timer = 31; // Reset timer
    timerRunning = false;
    updateUI(); // Reset UI
}

// Button event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
nextPhaseButton.addEventListener('click', () => {
    stopTimer();
    moveToNextPhase();
});
resetButton.addEventListener('click', reset);

// Initialize the first phase
updateUI();
