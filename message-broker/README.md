# Message Broker

Write a program that brokers messages. It needs to perform 2 basic functions:

1. Allow a message producer to send messages to the broker.
2. Allow a message consumer to retrieve all *unread* messages at some later time.

(The message producer and consumer are also programs that can talk to the broker)

The goal isn't to make a flawless system, but to judge your style of solving problems, coding, testing and organization. Here are some stages you should follow, when developing:

1. Choose libraries. Explain why you chose each dependency.
2. Create a base message broker that receives JSON messages and stores them to be consumed.
3. Design and implement an API to send / read messages from the broker.
4. Implement a couple of producers and consumers (as separate processes), and explain how to run them to test the system.
5. **Bonus:** Implement at-most-once delivery. This means that when a consumer reads a message, the system will guarantee that no other consumers read the message. Think about reliability especially in this case.

You don't have to implement the bonus stage but be prepared to be asked how you would go about implementing it. Be prepared to answer questions about your thought process behind the software you wrote. Be prepared to answer questions about the reliability, durability, performance and scale of the implementation. You will be asked why you chose a specific architecture or pattern. The algorithms you use in the implementation are not really going to be judged, but the explanation why you chose them will be. Be prepared to tell us what you would improve.

## What you must use

1. Use HTTP as your basic protcol. You're free to use REST or some RPC on top of that.
2. The message broker should be implemented using Node.js and PostgreSQL.

## What you should use (but not necessary)

1. Docker for the setup
2. Typescript
3. Some testing framework for your unit/integration tests.

---
Don't be scared if you don't have answers to everything. Nobody does!