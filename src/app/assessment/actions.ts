"use server";

import db from '@/lib/db';

export async function saveAssessment(answers: Record<number, number>, percentage: number): Promise<boolean> {
  // Server-side action to save the assessment result
  try {
    const stmt = db.prepare(
      'INSERT INTO assessments (answers, score) VALUES (?, ?)'
    );
    stmt.run(JSON.stringify(answers), percentage);
    console.log(`Assessment saved successfully with score: ${percentage}%`);
    return true;
  } catch (error) {
    console.error('SERVER ACTION ERROR: Failed to save assessment:', error);
    // In a real app, you would log this error and return false for the client
    return false;
  }
}
