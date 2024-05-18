<script>
    let answers = {
        q1: '',
        // Add more questions here
    };

    const correctAnswers = {
        q1: 'Paris',
        // Add more correct answers here
    };

    let score = 0;

    async function submitTest() {
        score = Object.keys(correctAnswers).reduce((acc, key) => {
            return acc + (answers[key] === correctAnswers[key] ? 1 : 0);
        }, 0);

        const result = {
            score: score,
            total: Object.keys(correctAnswers).length
        };

        try {
            const response = await fetch('http://localhost:3000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(result)
            });

            if (response.ok) {
                alert('Your grade has been submitted');
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
    <form on:submit|preventDefault={submitTest}>
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
    }
</style>
