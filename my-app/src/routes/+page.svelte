<script>
        import { goto } from '$app/navigation';

    let name = '';
    let answers = {
        q1: '',
        // Add more questions here
    };

    const correctAnswers = {
        q1: 'Paris',
        // Add more correct answers here
    };

    let score = 0;

    async function submitTest(event) {
        event.preventDefault();

        score = Object.keys(correctAnswers).reduce((acc, key) => {
            return acc + (answers[key] === correctAnswers[key] ? 1 : 0);
        }, 0);

        const result = {
            name: name,
            score: score,
            total: Object.keys(correctAnswers).length
        };

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(result)
            });

            if (response.ok) {
                alert('Your grade has been submitted');
                goto('/success');
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
</script>

<main>
    <h1>Student Test</h1>
    <form on:submit={submitTest}>
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" bind:value={name} required>
        </div>
        <div>
            <p>1. What is the capital of France?</p>
            <input type="radio" id="q1a" name="q1" value="Paris" bind:group={answers.q1}>
            <label for="q1a">Paris</label><br>
            <input type="radio" id="q1b" name="q1" value="London" bind:group={answers.q1}>
            <label for="q1b">London</label><br>
            <input type="radio" id="q1c" name="q1" value="Berlin" bind:group={answers.q1}>
            <label for="q1c">Berlin</label><br>
        </div>
        <!-- Add more questions similarly -->
        <button type="submit">Submit</button>
    </form>
</main>

<style>
    main {
        max-width: 600px;
        margin: 0 auto;
        padding: 1em;
        font-family: Arial, sans-serif;
    }

    h1 {
        text-align: center;
        color: #333;
        margin-bottom: 1em;
        font-size: 2em;
        border-bottom: 2px solid #eee;
        padding-bottom: 0.5em;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    label {
        font-size: 1em;
        color: #555;
    }

    input[type="text"] {
        padding: 0.5em;
        font-size: 1em;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    input[type="radio"] {
        margin-right: 0.5em;
    }

    button {
        padding: 0.75em;
        font-size: 1em;
        color: #fff;
        background-color: #007BFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
