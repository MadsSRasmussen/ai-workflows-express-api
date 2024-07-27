import dotenv from "dotenv";
import { describe, test, expect, beforeAll } from "vitest";
dotenv.config();

describe('Endpoint: "/"', () => {
    let response: Response;
    let text: string;

    beforeAll(async () => {
        if (!process.env.PORT) throw new Error('[SETUP] No port enviroment variable...');
        const url = `http://localhost:${process.env.PORT}`;
        response = await fetch(url);
        text = await response.text();
    });

    test('responds with status 200', () => {
        expect(response.status).toBe(200);
    })

    test('responds with "Application is running"', () => {
        expect(text).toBe('Application is running');
    })
});