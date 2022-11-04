import { Card, CardContent, Typography } from "@mui/material";

const MemoryCard = () => {
	return (
		<Card>
			<CardContent>
				<Typography>[00400000] 8fa40000 lw $4, 0($29)</Typography>
				<Typography>[00400004] 27a50004 addiu $5, $29, 4</Typography>
				<Typography>[00400008] 24a60004 addiu $6, $5, 4</Typography>
				<Typography>[0040000c] 00041080 sll $2, $4, 2</Typography>
				<Typography>[00400010] 00c23021 addu $6, $6, $2</Typography>
				<Typography>
					[00400014] 0c000000 jal 0x00000000 [main]
				</Typography>
				<Typography>[00400018] 00000000 nop</Typography>
				<Typography>[0040001c] 3402000a ori $2, $0, 10</Typography>
				<Typography>[00400020] 0000000c syscall</Typography>
			</CardContent>
		</Card>
	);
};

export default MemoryCard;
