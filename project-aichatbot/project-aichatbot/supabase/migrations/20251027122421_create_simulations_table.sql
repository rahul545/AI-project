/*
  # Market Impact Simulator Database Schema

  ## Overview
  Creates the core database structure for storing simulation queries and results.

  ## New Tables
  
  ### `simulations`
  Stores all simulation queries and their AI-generated results.
  
  - `id` (uuid, primary key) - Unique identifier for each simulation
  - `query` (text) - The natural language question asked by the user
  - `response` (jsonb) - The AI-generated response containing simulation results
  - `status` (text) - Simulation status: 'pending', 'completed', 'error'
  - `error_message` (text, nullable) - Error details if simulation failed
  - `created_at` (timestamptz) - When the simulation was created
  - `completed_at` (timestamptz, nullable) - When the simulation completed
  
  ## Security
  
  ### Row Level Security (RLS)
  - RLS enabled on `simulations` table
  - Public read access for all users (anonymous and authenticated)
  - Public insert access for all users to create simulations
  - Public update access to update simulation status
  
  ## Notes
  - JSONB format allows flexible storage of various simulation result types
  - Status tracking enables real-time updates and error handling
  - Timestamps provide audit trail and performance metrics
*/

-- Create simulations table
CREATE TABLE IF NOT EXISTS simulations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  query text NOT NULL,
  response jsonb,
  status text NOT NULL DEFAULT 'pending',
  error_message text,
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Enable Row Level Security
ALTER TABLE simulations ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no auth required for this demo app)
CREATE POLICY "Anyone can view simulations"
  ON simulations
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create simulations"
  ON simulations
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update simulations"
  ON simulations
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS simulations_created_at_idx ON simulations(created_at DESC);
CREATE INDEX IF NOT EXISTS simulations_status_idx ON simulations(status);