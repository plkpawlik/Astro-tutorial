import { useState } from "preact/hooks";

export default function ({ messages }: { messages: unknown[] }) {
	// component logic

	const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);

	// component layout
	return (
		<div>
			<h3>{greeting}! Thank you for visiting!</h3>
			<button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
		</div>
	);
}
