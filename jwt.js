import jwt from 'jsonwebtoken'

// Extract token from authorization header

export const jwtAuthVerify = (req, res, next) => {

          const authorization  = req.headers.authorization

          if(!authorization) {
                    return res.status(401).json({ message: "token not found " });
          }
          const token = req.headers.authorization.split(' ')[1] ;
        
        
          try {
            const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decodedPayload;
            next();
            
          } catch (error) {
            if (error.name === 'TokenExpiredError') {
              return res.status(401).json({ message: "Token expired" });
            }
            return res.status(401).json({ message: "Invalid token" });
          }
        };
        
// Function to generate token 

export const generateToken = (userData) => {
       
          const payload = typeof userData === 'string' ? { user: userData } : userData;
        
          return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h"
          });
        };
        