import React, { useState } from 'react';
import { useCheckInContext } from '../context/CheckInContext';
import type { Mood, EnergyLevel } from '../types';

export const CheckInForm = () => {
  const { addCheckin } = useCheckInContext();

  // 1. Local state for the form fields
  const [name, setName] = useState('');
  const [mood, setMood] = useState<Mood | ''>(''); // Start as empty string
  const [energy, setEnergy] = useState<EnergyLevel>(3); // Default to middle
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation check
    if (!name || !mood) {
      alert("Please enter your name and select a mood!");
      return;
    }

    // 2. Call the context function (Note: ID and Timestamp are added in the Reducer!)
    addCheckin({
      name,
      mood: mood as Mood,
      energy,
      comment
    });

    // 3. Reset form
    setName('');
    setMood('');
    setEnergy(3);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Input */}
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Your Name" 
      />

      {/* Mood Selection - You can map through your Mood types here */}
      <select value={mood} onChange={(e) => setMood(e.target.value as Mood)}>
        <option value="">How are you feeling?</option>
        <option value="excellent">Excellent</option>
        <option value="good">Good</option>
        <option value="not bad">Not Bad</option>
        <option value="tired">Tired</option>
        <option value="stressed">Stressed</option>
      </select>

      {/* Energy Slider */}
      <label>Energy Level: {energy}</label>
      <input 
        type="range" min="1" max="5" 
        value={energy} 
        onChange={(e) => setEnergy(Number(e.target.value) as EnergyLevel)} 
      />

      <button type="submit">Check In</button>
    </form>
  );
};